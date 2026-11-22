# RKM website content bot

Lets approved people (the Ashrama's monks) change the website's **content** by
messaging the Telegram bot in plain English. Runs on the Mac mini (`popeye`).

## How a change flows

1. Message the bot (optionally with a photo).
2. Claude edits `src/content/*.json` in a separate checkout (`~/rkm-bot/site`).
   It runs in Claude Code's `--restricted` mode: no shell, no web, and file
   tools confined to `src/content` and `public/images/uploads`.
3. Gatekeeper (`gatekeep()`): only those files may change, JSON must parse, and
   list items may only be added or hidden (`"hidden": true`), never removed.
4. The site is built and screenshotted (desktop + phone); the bot sends the
   preview with **Publish** / **Discard** buttons.
5. Publish → commit (author "RKM Content Bot", message quotes the request) →
   push to GitHub → `vercel --prod`. `/undo` reverts the last bot commit.

Unknown Telegram users get a polite message; the admin gets an "Allow" button.

## Files on the Mac mini

```
~/rkm-bot/
  app/          git clone used to RUN the bot (this folder)
  site/         git clone the bot EDITS, builds and deploys
  config.json   secrets (mode 600) — never commit
  state.json    poll offset, pending change, publish history
  bot.log
```

`config.json`:

```json
{
  "bot_token": "…from BotFather…",
  "admin_id": "1923935459",
  "allowed_users": { "1923935459": "Vinay" },
  "vercel_token": "…",
  "git_email": "vinaysolapurkar@users.noreply.github.com",
  "branch": "main",
  "deploy": "production",
  "model": "sonnet"
}
```

Service: `~/Library/LaunchAgents/org.rkmbelagavi.content-bot.plist` (KeepAlive).
Restart: `launchctl kickstart -k gui/$(id -u)/org.rkmbelagavi.content-bot`.

## Adding editable pages

Move the page's text into `src/content/<page>.json`, render it from there, and
list the file in `rules.md` so Claude knows which page it belongs to.
