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
    return { offset: 0, pending: null };
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

async function freshCheckout() {
  await sh("git", ["fetch", "--quiet", "origin", BRANCH]);
  await sh("git", ["reset", "--quiet", "--hard", `origin/${BRANCH}`]);
  await sh("git", ["clean", "-fdq", "src/content", "public/images/uploads"]);
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
    const okContent = /^src\/content\/[\w-]+\.json$/.test(f);
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
    let before = null;
    try {
      const { stdout } = await sh("git", ["show", `HEAD:${f}`]);
      before = JSON.parse(stdout);
    } catch {
      problems.push(`new content files are not allowed (${f})`);
      continue;
    }
    compareShape(before, after, f, problems);
  }
  return { files, problems };
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

const RULES = fs.readFileSync(new URL("./rules.md", import.meta.url), "utf8");
const OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    status: { enum: ["changed", "question", "refused"] },
    reply: { type: "string", description: "Short, polite message to the person, in simple English." },
    summary: { type: "string", description: "One line describing the change, for the GitHub history." },
    pages: { type: "array", items: { type: "string" }, description: "Site paths affected, e.g. / or /events" },
    focus: { type: "string", description: "A short exact phrase (3-6 words) from the new or changed text, used to centre the preview screenshot on it." },
  },
  required: ["status", "reply", "summary", "pages", "focus"],
};

async function askClaude(prompt, resumeId) {
  const args = [
    "-p", prompt,
    "--restricted",
    "--strict-mcp-config",
    "--tools", "Read,Edit,Write,Glob,Grep",
    "--permission-mode", "dontAsk",
    "--add-dir", UPLOADS_DIR,
    "--model", config.model || "sonnet",
    "--append-system-prompt", RULES,
    "--output-format", "json",
    "--json-schema", JSON.stringify(OUTPUT_SCHEMA),
  ];
  if (resumeId) args.push("--resume", resumeId);
  const { stdout } = await run("claude", args, { cwd: CONTENT_DIR, env: ENV, maxBuffer: 50 * 1024 * 1024, timeout: 15 * 60 * 1000 });
  const out = JSON.parse(stdout);
  const result = out.structured_output ?? JSON.parse(out.result);
  return { ...result, sessionId: out.session_id };
}

// ─── preview: build, serve, screenshot ───────────────────────────────────────

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

// ─── publish / discard / undo ────────────────────────────────────────────────

async function publish(chatId) {
  const p = state.pending;
  await sh("git", ["add", "src/content", "public/images/uploads"]);
  const msg = `Content: ${p.summary}\n\nRequested by ${p.requestedBy} via the Telegram content bot:\n${p.requests.map((r) => `> ${r}`).join("\n")}`;
  await sh("git", ["-c", "user.name=RKM Content Bot", "-c", `user.email=${config.git_email}`, "commit", "-q", "-m", msg]);
  await sh("git", ["pull", "--quiet", "--rebase", "origin", BRANCH]);
  await sh("git", ["push", "--quiet", "origin", `HEAD:${BRANCH}`]);
  const url = await deploy();
  const { stdout } = await sh("git", ["rev-parse", "--short", "HEAD"]);
  state.history = [...(state.history || []), { sha: stdout.trim(), summary: p.summary, by: p.requestedBy, at: Date.now() }].slice(-50);
  state.pending = null;
  saveState();
  await say(chatId, PRODUCTION ? `✅ Published. It is now live on ${LIVE_URL}${p.pages[0] || "/"}` : `✅ Test mode: published to a preview, not the live site: ${url}`);
  if (!isAdmin(chatId)) await say(config.admin_id, `🔔 ${p.requestedBy} published a website change: ${p.summary}`);
}

async function deploy() {
  const args = ["--yes", "--token", config.vercel_token];
  if (PRODUCTION) args.unshift("--prod");
  const { stdout } = await sh("vercel", args, { timeout: 10 * 60 * 1000 });
  return stdout.trim().split("\n").at(-1);
}

async function discard(chatId, note = "❌ Discarded. Nothing was changed on the website.") {
  state.pending = null;
  saveState();
  await freshCheckout();
  await say(chatId, note);
}

async function undoLast(chatId) {
  const last = (state.history || []).at(-1);
  if (!last) return say(chatId, "There is no bot change to undo.");
  await freshCheckout();
  const { stdout } = await sh("git", ["log", "-1", "--format=%h %an", `origin/${BRANCH}`]);
  if (!stdout.includes("RKM Content Bot") || !stdout.startsWith(last.sha)) {
    return say(chatId, "Someone has changed the website since the last bot change, so I can't undo it safely. Please ask Vinay.");
  }
  await say(chatId, `Undoing: "${last.summary}"… this takes about 3 minutes.`);
  await sh("git", ["-c", "user.name=RKM Content Bot", "-c", `user.email=${config.git_email}`, "revert", "--no-edit", "HEAD"]);
  await sh("git", ["push", "--quiet", "origin", `HEAD:${BRANCH}`]);
  await deploy();
  state.history.pop();
  saveState();
  await say(chatId, "↩️ Undone. The website is back to how it was before that change.");
}

// ─── conversation ────────────────────────────────────────────────────────────

const KEYBOARD = {
  inline_keyboard: [[
    { text: "✅ Publish", callback_data: "publish" },
    { text: "❌ Discard", callback_data: "discard" },
  ]],
};

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

async function handleRequest(msg) {
  const chatId = msg.chat.id;
  const who = userName(msg.from.id);
  let text = (msg.text || msg.caption || "").trim();

  const p = state.pending;
  if (p && p.chatId !== chatId) {
    return say(chatId, `${p.requestedBy} has a change waiting for Publish or Discard. Please try again in a few minutes.`);
  }
  if (!p) await freshCheckout();

  const photos = [];
  if (msg.photo) photos.push(await downloadPhoto(msg.photo.at(-1).file_id));
  if (msg.document && /^image\//.test(msg.document.mime_type || "")) photos.push(await downloadPhoto(msg.document.file_id));
  if (!text && !photos.length) return say(chatId, "Please send your request as a text message (you can attach a photo).");
  if (photos.length) text += `\n\n[Photo attached by the user, saved at ${photos.join(", ")} — use this path in the content file. Its file on disk is in ${UPLOADS_DIR}.]`;

  await say(chatId, "🙏 Working on it…");
  await tg("sendChatAction", { chat_id: chatId, action: "typing" });

  let answer;
  try {
    answer = await askClaude(`Request from ${who}:\n${text}`, p?.sessionId);
  } catch (err) {
    log("claude failed", err.message);
    return say(chatId, "Sorry, something went wrong while reading your request. Please try again.");
  }
  log(`claude[${answer.status}]`, answer.summary);

  const { files, problems } = await gatekeep();
  if (problems.length) {
    log("gatekeeper blocked:", problems.join("; "));
    await discard(chatId, "Sorry, I can only change the website's text, dates and photos. That request needs Vinay's help, so I haven't changed anything.");
    return say(config.admin_id, `⚠️ Gatekeeper blocked a change from ${who}:\n${problems.join("\n")}\nRequest: ${text}`);
  }

  if (!files.length || answer.status !== "changed") {
    if (answer.status === "question" && files.length === 0) {
      state.pending = p ? { ...p, sessionId: answer.sessionId } : { chatId, requestedBy: who, sessionId: answer.sessionId, requests: [text], summary: "", pages: [], draft: true };
      saveState();
    }
    return say(chatId, answer.reply);
  }

  await say(chatId, `${answer.reply}\n\n⏳ Preparing a preview (about 2 minutes)…`);
  try {
    await buildSite();
  } catch (err) {
    log("build failed", err.stderr?.slice(-2000) || err.message);
    await discard(chatId, "Sorry, that change broke the website build, so I've undone it. Vinay has been told.");
    return say(config.admin_id, `⚠️ Build failed for ${who}'s request: ${text}\n${(err.stderr || err.message).slice(-1500)}`);
  }

  const pages = answer.pages.length ? answer.pages : ["/"];
  state.pending = {
    chatId,
    requestedBy: who,
    sessionId: answer.sessionId,
    requests: [...(p?.requests || []), text],
    summary: answer.summary,
    pages,
  };
  saveState();

  try {
    const shots = await screenshots(pages, answer.focus);
    if (shots.length) await sendPhotos(chatId, shots.slice(0, 10), "Preview of the change (computer and phone views)");
  } catch (err) {
    log("screenshots failed", err.message);
  }
  await say(chatId, `Here is the change: ${answer.summary}\n\nTap Publish to put it live, or Discard to cancel. You can also reply with more corrections.`, { reply_markup: KEYBOARD });
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
    if (!state.pending || state.pending.chatId !== chatId || state.pending.draft) return say(chatId, "There is no change waiting.");
    await tg("editMessageReplyMarkup", { chat_id: chatId, message_id: q.message.message_id, reply_markup: { inline_keyboard: [] } });
    if (q.data === "publish") {
      await say(chatId, "Publishing… (about 3 minutes)");
      return publish(chatId);
    }
    if (q.data === "discard") return discard(chatId);
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
    return say(msg.chat.id, "🙏 Namaste! Tell me what to change on the website, in plain English. For example:\n• Add an upcoming event: Sri Sarada Devi Jayanti on 13 December, with special puja at 6 am\n• Change the date of Japa Yajna to 5–9 February 2027\n• Remove the Guru Purnima event\n\nYou can attach a photo. I will show you a preview before anything goes live.\n\nType /undo to reverse the last published change.");
  }
  if (text === "/undo") return undoLast(msg.chat.id);
  if (text === "/cancel") return discard(msg.chat.id);

  return handleRequest(msg);
}

// ─── main loop ───────────────────────────────────────────────────────────────

async function main() {
  log("bot starting");
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
