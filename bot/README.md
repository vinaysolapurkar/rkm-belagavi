# RKM website content bot

Lets approved people (the Ashrama's monks) change the website's **content** by
messaging the Telegram bot in plain English. Runs on the Mac mini (`popeye`).

## How a change flows

1. Message the bot (optionally with a photo). Greetings get a friendly reply.
2. **Plan** — Claude (read-only, `--restricted`) lists the exact changes in
   plain words and the bot asks "Shall I update the website?" with a
   **Yes / No** button. Replying with corrections produces a new plan.
3. **Apply** (after Yes) — the checkout is reset to GitHub; the bot refuses if
   the live site isn't a version GitHub has. Claude makes exactly the approved
   changes, with file tools confined to `src/content` and
   `public/images/uploads`.
4. Gatekeeper (`gatekeep()`): only those files may change, JSON must parse,
   list items may only be added or hidden (`"hidden": true`), never removed.
5. The site is built; then the change is **committed and pushed to GitHub
   first**, then deployed (`vercel --prod`). Screenshots of the result are sent.
   `/undo` reverts the last bot commit and redeploys.

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
  "vercel_project_id": "prj_kDzNJicG8Px9pzIRRm2EeRmTKEs7",
  "vercel_team_id": "team_rj981fuTKJgDS10MjsONvzHN",
  "model": "sonnet"
}
```

Service: `~/Library/LaunchAgents/org.rkmbelagavi.content-bot.plist` (KeepAlive).
Restart: `launchctl kickstart -k gui/$(id -u)/org.rkmbelagavi.content-bot`.

## Adding editable pages

Move the page's text into `src/content/<page>.json`, render it from there, and
list the file in `rules.md` so Claude knows which page it belongs to.
