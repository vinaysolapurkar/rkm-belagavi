#!/usr/bin/env node
// RKM Belagavi website content bot.
//
// Allowed Telegram users describe content changes in plain English. Claude
// (restricted mode: no shell, no web, file tools confined to src/content and
// public/images/uploads) edits the content JSON. This script then checks the
// change, builds the site, sends screenshots, and on "Publish" commits to
// GitHub and deploys to Vercel. Nothing goes live without a Publish tap.
//
// Config: ~/rkm-bot/config.json (mode 600) — see bot/README.md.

import { execFile, spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const HOME = os.homedir();
const BOT_DIR = path.join(HOME, "rkm-bot");
const CONFIG_PATH = path.join(BOT_DIR, "config.json");
const STATE_PATH = path.join(BOT_DIR, "state.json");
const LOG_PATH = path.join(BOT_DIR, "bot.log");
const SITE = path.join(BOT_DIR, "site");
const CONTENT_DIR = path.join(SITE, "src/content");
const UPLOADS_DIR = path.join(SITE, "public/images/uploads");
const SHOTS_DIR = path.join(BOT_DIR, "shots");
const PREVIEW_PORT = 3210;
const LIVE_URL = "https://www.rkmbelagavi.org";
const ENV = { ...process.env, PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH}` };

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
// branch: the GitHub branch the bot edits (normally "main").
// deploy: "production" puts changes live; "preview" only makes a test link.
const BRANCH = config.branch || "main";
const PRODUCTION = (config.deploy || "production") === "production";
const API = `https://api.telegram.org/bot${config.bot_token}`;

// ─── small helpers ───────────────────────────────────────────────────────────

function log(...parts) {
  const line = `${new Date().toISOString()}  ${parts.join(" ")}`;
  fs.appendFileSync(LOG_PATH, line + "\n");
  console.log(line);
}

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch {
    return { offset: 0, convos: {}, history: [] };
  }
}
function saveState() {
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}
const state = loadState();

function saveConfig() {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), { mode: 0o600 });
}

async function tg(method, body) {
  const res = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!data.ok) log("telegram error", method, data.description);
  return data;
}

const say = (chatId, text, extra = {}) => tg("sendMessage", { chat_id: chatId, text, ...extra });

async function sendPhotos(chatId, files, caption) {
  const form = new FormData();
  form.append("chat_id", String(chatId));
  const media = files.map((f, i) => ({ type: "photo", media: `attach://p${i}`, ...(i === 0 ? { caption } : {}) }));
  form.append("media", JSON.stringify(media));
  files.forEach((f, i) => form.append(`p${i}`, new Blob([fs.readFileSync(f)], { type: "image/png" }), path.basename(f)));
  const res = await fetch(`${API}/sendMediaGroup`, { method: "POST", body: form });
  const data = await res.json();
  if (!data.ok) log("telegram error sendMediaGroup", data.description);
}

async function sh(cmd, args, opts = {}) {
  return run(cmd, args, { cwd: SITE, env: ENV, maxBuffer: 50 * 1024 * 1024, ...opts });
}

const isAdmin = (id) => String(id) === String(config.admin_id);
const userName = (id) => config.allowed_users[String(id)];

// ─── the site checkout ───────────────────────────────────────────────────────

// Bring the checkout up to GitHub's latest before Claude reads or edits it.
// (Untracked uploaded photos survive a hard reset.)
async function syncCheckout() {
  await sh("git", ["fetch", "--quiet", "origin", BRANCH]);
  await sh("git", ["reset", "--quiet", "--hard", `origin/${BRANCH}`]);
}

async function changedFiles() {
  const { stdout } = await sh("git", ["status", "--porcelain", "--untracked-files=all"]);
  return stdout
    .split("\n")
    .filter(Boolean)
    .map((l) => l.slice(3).trim());
}

// Content-only gatekeeper. Claude is already confined to these folders; this
// is the second lock, and it also enforces "delete = hide".
async function gatekeep() {
  const files = await changedFiles();
  const problems = [];
  for (const f of files) {
    const okContent = /^src\/content\/[\w-]+\.json$/.test(f) || /^src\/content\/pages\/[a-z0-9-]+\.json$/.test(f);
    const okUpload = /^public\/images\/uploads\/[\w.-]+\.(jpe?g|png|webp)$/i.test(f);
    if (!okContent && !okUpload) problems.push(`not allowed to change ${f}`);
  }
  for (const f of files.filter((f) => f.endsWith(".json"))) {
    let after;
    try {
      after = JSON.parse(fs.readFileSync(path.join(SITE, f), "utf8"));
    } catch {
      problems.push(`${f} is not valid JSON`);
      continue;
    }
    const isPage = f.startsWith("src/content/pages/");
    if (isPage) validatePage(after, f, problems);
    let before = null;
    try {
      const { stdout } = await sh("git", ["show", `HEAD:${f}`]);
      before = JSON.parse(stdout);
    } catch {
      // Only whole new pages may be added; their address must be free.
      if (!isPage) problems.push(`new content files are not allowed (${f})`);
      else if (RESERVED_SLUGS().has(path.basename(f, ".json"))) problems.push(`page address /${path.basename(f, ".json")} is already used by the site`);
      continue;
    }
    compareShape(before, after, f, problems);
  }
  return { files, problems };
}

// Addresses the site already uses (its own pages and system paths).
const RESERVED_SLUGS = () =>
  new Set([
    ...fs.readdirSync(path.join(SITE, "src/app"), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name),
    "images", "_next", "favicon.ico", "robots.txt", "sitemap.xml", "admin", "login",
  ]);

// A page may only use the fixed block types — no code, no raw HTML.
const BLOCK_FIELDS = {
  heading: { text: "string" },
  paragraph: { text: "string" },
  image: { src: "string", alt: "string", caption: "string?" },
  list: { items: "strings" },
  quote: { text: "string", author: "string?" },
  button: { text: "string", href: "string" },
};
function validatePage(page, where, problems) {
  const bad = (m) => problems.push(`${where}: ${m}`);
  if (!page || typeof page !== "object" || Array.isArray(page)) return bad("must be an object");
  for (const k of Object.keys(page)) if (!["title", "subtitle", "hidden", "blocks"].includes(k)) bad(`unknown field "${k}"`);
  if (typeof page.title !== "string" || !page.title.trim()) bad("needs a title");
  if (page.subtitle !== undefined && typeof page.subtitle !== "string") bad("subtitle must be text");
  if (page.hidden !== undefined && typeof page.hidden !== "boolean") bad("hidden must be true/false");
  if (!Array.isArray(page.blocks)) return bad("needs a blocks list");
  page.blocks.forEach((b, i) => {
    const spec = BLOCK_FIELDS[b?.type];
    if (!spec) return bad(`block ${i}: unknown type "${b?.type}"`);
    for (const k of Object.keys(b)) if (k !== "type" && k !== "hidden" && !(k in spec)) bad(`block ${i}: unknown field "${k}"`);
    for (const [k, t] of Object.entries(spec)) {
      const v = b[k];
      if (t === "string?" && v === undefined) continue;
      if (t === "strings" ? !(Array.isArray(v) && v.every((x) => typeof x === "string")) : typeof v !== "string") bad(`block ${i}: "${k}" is missing or wrong`);
    }
    if (b.type === "image" && (!/^\/images\/[\w./-]+\.(jpe?g|png|webp)$/i.test(b.src || "") || b.src.includes("..") || !fs.existsSync(path.join(SITE, "public", b.src))))
      bad(`block ${i}: photo must be one of the site's images`);
    if (b.type === "button" && !/^(\/|https:\/\/|mailto:|tel:)/.test(b.href || "")) bad(`block ${i}: button link not allowed`);
  });
}

// Every list may only grow (new items) — removing items is not allowed, they
// must be hidden instead. Top-level sections may not be added or removed.
function compareShape(before, after, where, problems) {
  if (Array.isArray(before)) {
    if (!Array.isArray(after)) return problems.push(`${where} must stay a list`);
    if (after.length < before.length) problems.push(`${where}: items were removed instead of hidden`);
    return;
  }
  if (before && typeof before === "object") {
    if (!after || typeof after !== "object" || Array.isArray(after)) return problems.push(`${where} changed type`);
    for (const k of Object.keys(before)) {
      if (!(k in after)) problems.push(`${where}.${k} was removed`);
      else compareShape(before[k], after[k], `${where}.${k}`, problems);
    }
  }
}

// ─── Claude ──────────────────────────────────────────────────────────────────
//
// Two steps, so nothing changes without a yes:
//   plan  — read-only tools; decide if this is chat, a question, a refusal, or a
//           change, and spell out the exact change in plain words.
//   apply — after the user taps "Yes", the same conversation is resumed with
//           edit tools and makes exactly the approved change.

const RULES = fs.readFileSync(new URL("./rules.md", import.meta.url), "utf8");
const PLAN_SCHEMA = {
  type: "object",
  properties: {
    kind: { enum: ["chat", "change", "question", "refused"] },
    reply: { type: "string", description: "Message to the person in short, simple, polite English." },
    plan: { type: "array", items: { type: "string" }, description: "For kind=change: each exact change in plain words, quoting new text." },
    summary: { type: "string", description: "For kind=change: one line for the GitHub history." },
    pages: { type: "array", items: { type: "string" }, description: "For kind=change: site paths that will show the change, e.g. / or /events" },
  },
  required: ["kind", "reply", "plan", "summary", "pages"],
};
const APPLY_SCHEMA = {
  type: "object",
  properties: {
    done: { type: "boolean", description: "true if every approved change was made exactly" },
    reply: { type: "string", description: "If not done: why, in simple English." },
    focus: { type: "string", description: "A short exact phrase (3-6 words) from the new or changed text, to centre the screenshot on it." },
  },
  required: ["done", "reply", "focus"],
};

async function askClaude(prompt, resumeId, mode) {
  const args = [
    "-p", prompt,
    "--restricted",
    "--strict-mcp-config",
    "--add-dir", UPLOADS_DIR,
    "--model", config.model || "sonnet",
    "--append-system-prompt", RULES,
    "--output-format", "json",
  ];
  if (mode === "apply") {
    args.push("--tools", "Read,Edit,Write,Glob,Grep", "--permission-mode", "acceptEdits", "--json-schema", JSON.stringify(APPLY_SCHEMA));
  } else {
    args.push("--tools", "Read,Glob,Grep", "--json-schema", JSON.stringify(PLAN_SCHEMA));
  }
  if (resumeId) args.push("--resume", resumeId);
  const { stdout } = await run("claude", args, { cwd: CONTENT_DIR, env: ENV, maxBuffer: 50 * 1024 * 1024, timeout: 15 * 60 * 1000 });
  const out = JSON.parse(stdout);
  const result = out.structured_output ?? JSON.parse(out.result);
  return { ...result, sessionId: out.session_id };
}

// ─── build, screenshot, deploy ───────────────────────────────────────────────

async function buildSite() {
  await sh("npx", ["next", "build"], { timeout: 10 * 60 * 1000 });
}

async function screenshots(pages, focus) {
  fs.rmSync(SHOTS_DIR, { recursive: true, force: true });
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
  const server = spawn("npx", ["next", "start", "-p", String(PREVIEW_PORT)], { cwd: SITE, env: ENV, stdio: "ignore" });
  try {
    for (let i = 0; i < 60; i++) {
      try {
        await fetch(`http://localhost:${PREVIEW_PORT}/`);
        break;
      } catch {
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
    await run("node", [new URL("./screenshot.mjs", import.meta.url).pathname, `http://localhost:${PREVIEW_PORT}`, SHOTS_DIR, focus || "", ...pages], {
      env: ENV,
      timeout: 5 * 60 * 1000,
    });
  } finally {
    server.kill();
  }
  return fs.readdirSync(SHOTS_DIR).sort().map((f) => path.join(SHOTS_DIR, f));
}

async function deploy() {
  const args = ["--yes", "--token", config.vercel_token];
  if (PRODUCTION) args.unshift("--prod");
  const { stdout } = await sh("vercel", args, { timeout: 10 * 60 * 1000 });
  return stdout.trim().split("\n").at(-1);
}

// The live site must be a version GitHub already has, so any change the bot
// makes sits on top of GitHub's history and can be rolled back from there.
async function liveMatchesGitHub() {
  if (!PRODUCTION) return true;
  const res = await fetch(
    `https://api.vercel.com/v6/deployments?projectId=${config.vercel_project_id}&teamId=${config.vercel_team_id}&target=production&state=READY&limit=1`,
    { headers: { Authorization: `Bearer ${config.vercel_token}` } }
  );
  const live = (await res.json()).deployments?.[0];
  const sha = live?.meta?.githubCommitSha;
  if (!sha || live.meta.gitDirty === "1") return false;
  try {
    await sh("git", ["merge-base", "--is-ancestor", sha, `origin/${BRANCH}`]);
    return true;
  } catch {
    return false;
  }
}

// ─── conversations ───────────────────────────────────────────────────────────

const CONVO_IDLE_MS = 2 * 60 * 60 * 1000;

function convoFor(chatId, who) {
  const c = state.convos[chatId];
  if (c && Date.now() - c.updatedAt < CONVO_IDLE_MS) return c;
  return (state.convos[chatId] = { who, sessionId: null, requests: [], photos: [], proposal: null, updatedAt: Date.now() });
}

function endConvo(chatId) {
  delete state.convos[chatId];
  saveState();
}

function keepTyping(chatId) {
  tg("sendChatAction", { chat_id: chatId, action: "typing" });
  const t = setInterval(() => tg("sendChatAction", { chat_id: chatId, action: "typing" }), 4500);
  return () => clearInterval(t);
}

async function downloadPhoto(fileId) {
  const { result } = await tg("getFile", { file_id: fileId });
  const res = await fetch(`https://api.telegram.org/file/bot${config.bot_token}/${result.file_path}`);
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  const name = `${new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "")}-${Math.random().toString(36).slice(2, 6)}.jpg`;
  const file = path.join(UPLOADS_DIR, name);
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  await run("sips", ["-Z", "1600", "-s", "format", "jpeg", file, "--out", file], { env: ENV });
  return `/images/uploads/${name}`;
}

const CONFIRM_KEYBOARD = {
  inline_keyboard: [[
    { text: "✅ Yes, update the website", callback_data: "yes" },
    { text: "❌ No", callback_data: "no" },
  ]],
};

async function handleRequest(msg) {
  const chatId = msg.chat.id;
  const convo = convoFor(chatId, userName(msg.from.id));
  let text = (msg.text || msg.caption || "").trim();

  const photos = [];
  if (msg.photo) photos.push(await downloadPhoto(msg.photo.at(-1).file_id));
  if (msg.document && /^image\//.test(msg.document.mime_type || "")) photos.push(await downloadPhoto(msg.document.file_id));
  if (!text && !photos.length) return say(chatId, "Please send your message as text (you can attach a photo).");
  if (photos.length) {
    convo.photos.push(...photos);
    text += `\n\n[Photo attached, saved as ${photos.join(", ")} — use this path for the image.]`;
  }

  const stopTyping = keepTyping(chatId);
  await syncCheckout();
  let plan;
  try {
    plan = await askClaude(`Message from ${convo.who}:\n${text}`, convo.sessionId, "plan");
  } catch (err) {
    log("claude plan failed", err.message);
    return say(chatId, "Sorry, something went wrong while reading your message. Please try again.");
  } finally {
    stopTyping();
  }
  log(`plan[${plan.kind}]`, plan.summary || plan.reply.slice(0, 80));

  convo.sessionId = plan.sessionId;
  convo.requests.push(text);
  convo.updatedAt = Date.now();

  if (plan.kind !== "change" || !plan.plan.length) {
    convo.proposal = null;
    saveState();
    return say(chatId, plan.reply);
  }

  convo.proposal = { plan: plan.plan, summary: plan.summary, pages: plan.pages.length ? plan.pages : ["/"] };
  const sent = await say(chatId, `${plan.reply}\n\nI will make ${plan.plan.length === 1 ? "this change" : "these changes"}:\n\n${plan.plan.map((p) => `• ${p}`).join("\n")}\n\nShall I update the website? You can also reply with corrections.`, { reply_markup: CONFIRM_KEYBOARD });
  convo.proposal.messageId = sent.result?.message_id;
  saveState();
}

async function applyChange(chatId) {
  const convo = state.convos[chatId];
  const prop = convo.proposal;
  convo.proposal = null;
  saveState();

  await say(chatId, "🙏 Updating the website… (about 2–3 minutes)");
  const stopTyping = keepTyping(chatId);
  const fail = async (userMsg, adminMsg) => {
    await sh("git", ["reset", "--quiet", "--hard", `origin/${BRANCH}`]).catch(() => {});
    await say(chatId, userMsg);
    if (adminMsg) await say(config.admin_id, adminMsg);
  };
  try {
    // 1. Start from exactly what GitHub has; keep only this conversation's photos.
    await syncCheckout();
    const keep = new Set(convo.photos.map((p) => path.basename(p)));
    for (const f of fs.existsSync(UPLOADS_DIR) ? fs.readdirSync(UPLOADS_DIR) : []) {
      const tracked = await sh("git", ["ls-files", "--error-unmatch", `public/images/uploads/${f}`]).then(() => true, () => false);
      if (!tracked && !keep.has(f)) fs.rmSync(path.join(UPLOADS_DIR, f));
    }
    if (!(await liveMatchesGitHub())) {
      return fail(
        "Sorry, the website has a change that isn't saved in GitHub yet, so I can't update it safely right now. I've told Vinay.",
        "⚠️ Bot paused an update: the live site is not a version that's in GitHub. Push the live version to GitHub main, then ask them to try again."
      );
    }

    // 2. Make exactly the approved change.
    const res = await askClaude(
      `The user approved this plan. Make exactly these changes now, nothing else:\n${prop.plan.map((p) => `- ${p}`).join("\n")}`,
      convo.sessionId,
      "apply"
    );
    const { files, problems } = await gatekeep();
    if (!res.done || !files.length) return fail(`Sorry, I couldn't make that change. ${res.reply}`);
    if (problems.length) {
      return fail(
        "Sorry, I can only change the website's text, dates and photos, so I haven't changed anything. Vinay will help with this one.",
        `⚠️ Gatekeeper blocked a change from ${convo.who}:\n${problems.join("\n")}\nPlan: ${prop.plan.join(" | ")}`
      );
    }

    // 3. Make sure the site still builds.
    try {
      await buildSite();
    } catch (err) {
      return fail("Sorry, that change would have broken the website, so I've undone it. Vinay has been told.", `⚠️ Build failed for ${convo.who}: ${prop.summary}\n${(err.stderr || err.message).slice(-1500)}`);
    }

    // 4. Save to GitHub first, then update the website.
    await sh("git", ["add", "src/content", "public/images/uploads"]);
    const msg = `Content: ${prop.summary}\n\nApproved by ${convo.who} via the Telegram content bot.\n\nRequest:\n${convo.requests.map((r) => `> ${r.replace(/\n/g, "\n> ")}`).join("\n")}\n\nChanges:\n${prop.plan.map((p) => `- ${p}`).join("\n")}`;
    await sh("git", ["-c", "user.name=RKM Content Bot", "-c", `user.email=${config.git_email}`, "commit", "-q", "-m", msg]);
    await sh("git", ["push", "--quiet", "origin", `HEAD:${BRANCH}`]);
    const { stdout: sha } = await sh("git", ["rev-parse", "--short", "HEAD"]);

    let url;
    try {
      url = await deploy();
    } catch (err) {
      await say(chatId, "The change is saved, but the website didn't update. Vinay has been told and will put it live.");
      return say(config.admin_id, `⚠️ Deploy failed after commit ${sha.trim()} (${prop.summary}):\n${(err.stderr || err.message).slice(-1500)}`);
    }

    state.history = [...(state.history || []), { sha: sha.trim(), summary: prop.summary, by: convo.who, at: Date.now() }].slice(-50);
    endConvo(chatId);

    const where = PRODUCTION ? `${LIVE_URL}${prop.pages[0]}` : url;
    try {
      const shots = await screenshots(prop.pages, res.focus);
      if (shots.length) await sendPhotos(chatId, shots.slice(0, 10), "This is how it looks now (computer and phone).");
    } catch (err) {
      log("screenshots failed", err.message);
    }
    await say(chatId, `✅ Done. ${PRODUCTION ? "The website is updated" : "Test mode — updated on a preview only, not the live site"}: ${where}\n\nTo reverse it, send /undo.`);
    if (!isAdmin(chatId)) await say(config.admin_id, `🔔 ${convo.who} updated the website: ${prop.summary} (GitHub ${sha.trim()})`);
  } catch (err) {
    log("apply failed", err.stack || err.message);
    await fail("Sorry, something went wrong and nothing was changed. Vinay has been told.", `⚠️ Bot error while applying: ${err.message}`);
  } finally {
    stopTyping();
  }
}

async function undoLast(chatId) {
  const last = (state.history || []).at(-1);
  if (!last) return say(chatId, "There is no recent bot change to undo.");
  await syncCheckout();
  const { stdout } = await sh("git", ["log", "-1", "--format=%h %an", `origin/${BRANCH}`]);
  if (!stdout.includes("RKM Content Bot") || !stdout.startsWith(last.sha)) {
    return say(chatId, "Someone has changed the website since the last bot change, so I can't undo it safely. Please ask Vinay.");
  }
  await say(chatId, `Undoing: "${last.summary}"… (about 2 minutes)`);
  await sh("git", ["-c", "user.name=RKM Content Bot", "-c", `user.email=${config.git_email}`, "revert", "--no-edit", "HEAD"]);
  await sh("git", ["push", "--quiet", "origin", `HEAD:${BRANCH}`]);
  await deploy();
  state.history.pop();
  saveState();
  await say(chatId, "↩️ Undone. The website is back to how it was before that change.");
  if (!isAdmin(chatId)) await say(config.admin_id, `↩️ ${userName(chatId)} undid: ${last.summary}`);
}

async function handleUpdate(u) {
  if (u.callback_query) {
    const q = u.callback_query;
    await tg("answerCallbackQuery", { callback_query_id: q.id });
    const chatId = q.message.chat.id;
    if (q.data.startsWith("allow:") && isAdmin(q.from.id)) {
      const [, id, ...name] = q.data.split(":");
      config.allowed_users[id] = name.join(":") || `user ${id}`;
      saveConfig();
      await say(id, "🙏 You can now ask me to update the Ramakrishna Mission Ashrama, Belagavi website. Just tell me what to add or change, in plain English.");
      return say(chatId, `Allowed ${config.allowed_users[id]}.`);
    }
    if (!userName(q.from.id)) return;
    await tg("editMessageReplyMarkup", { chat_id: chatId, message_id: q.message.message_id, reply_markup: { inline_keyboard: [] } });
    const convo = state.convos[chatId];
    if (!convo?.proposal || convo.proposal.messageId !== q.message.message_id) {
      return say(chatId, "That suggestion is out of date. Please tell me again what you'd like to change.");
    }
    if (q.data === "yes") return applyChange(chatId);
    if (q.data === "no") {
      convo.proposal = null;
      saveState();
      return say(chatId, "OK, I haven't changed anything.");
    }
    return;
  }

  const msg = u.message;
  if (!msg || msg.chat.type !== "private") return;
  const id = String(msg.from.id);

  if (!userName(id)) {
    log("unknown user", id, msg.from.first_name, msg.from.username || "");
    await say(msg.chat.id, "🙏 Namaste. This bot updates the Ramakrishna Mission Ashrama, Belagavi website. Your request for access has been sent to the administrator.");
    const name = [msg.from.first_name, msg.from.last_name].filter(Boolean).join(" ").slice(0, 30);
    return say(config.admin_id, `New person asking to use the website bot:\n${name} ${msg.from.username ? "@" + msg.from.username : ""} (id ${id})`, {
      reply_markup: { inline_keyboard: [[{ text: `Allow ${name}`, callback_data: `allow:${id}:${name}` }]] },
    });
  }

  const text = (msg.text || "").trim();
  if (text === "/start" || text === "/help") {
    return say(msg.chat.id, "🙏 Namaste! Tell me what to change on the website, in plain English. For example:\n• Add an upcoming event: Sri Sarada Devi Jayanti on 30 December, special puja at 6 am\n• Change the date of Japa Yajna to 5–9 February 2027\n• Remove the Guru Purnima event\n\nYou can attach a photo. I will tell you exactly what I'm going to change and wait for your OK before updating the website.\n\nSend /undo to reverse the last update.");
  }
  if (text === "/undo") return undoLast(msg.chat.id);
  if (text === "/cancel") {
    endConvo(msg.chat.id);
    return say(msg.chat.id, "OK, cancelled. Nothing was changed.");
  }

  return handleRequest(msg);
}

// ─── main loop ───────────────────────────────────────────────────────────────

async function main() {
  log("bot starting");
  // Start every conversation afresh after a restart: a resumed Claude session
  // keeps the rules it began with, so old sessions would miss rule updates.
  state.convos = {};
  delete state.pending;
  saveState();
  await say(config.admin_id, "🟢 RKM website bot started.");
  for (;;) {
    let updates = [];
    try {
      const res = await fetch(`${API}/getUpdates?timeout=50&offset=${state.offset}&allowed_updates=${encodeURIComponent('["message","callback_query"]')}`);
      updates = (await res.json()).result || [];
    } catch (err) {
      log("poll failed", err.message);
      await new Promise((r) => setTimeout(r, 5000));
      continue;
    }
    for (const u of updates) {
      state.offset = u.update_id + 1;
      saveState();
      try {
        await handleUpdate(u);
      } catch (err) {
        log("update failed", err.stack || err.message);
        const chatId = u.message?.chat.id || u.callback_query?.message.chat.id;
        if (chatId) await say(chatId, "Sorry, something went wrong. Vinay has been told.").catch(() => {});
        await say(config.admin_id, `⚠️ Bot error: ${err.message}`).catch(() => {});
      }
    }
  }
}

main();
