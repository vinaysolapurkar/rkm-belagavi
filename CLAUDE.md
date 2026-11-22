# rkmbelagavi.org — Ramakrishna Mission Ashrama, Belagavi

## GitHub is the single source of truth (mandatory, every machine)

The site is changed from several places: the MacBook Pro, the Mac mini, and
the Telegram content bot (which commits as "RKM Content Bot"). To keep anyone's
change from being lost:

1. **Pull before you change anything.** A SessionStart hook runs
   `scripts/sync.sh`, which fast-forwards `main` from GitHub. If it reports
   that the checkout is not in sync, fix that first (pull / commit / push), and
   don't edit until it says "up to date".
2. **Commit and push to GitHub before deploying.** Never deploy uncommitted or
   unpushed work.
3. **Deploy only with `npm run deploy`** (`scripts/deploy.sh`). It refuses
   unless the code is exactly GitHub `main`. Never run `vercel --prod`
   directly.
4. Pull again right before pushing (`git pull --ff-only`) — the content bot may
   have published in the meantime.

## Content lives in `src/content/*.json`

Text, dates and photos for pages that the content bot can edit live in JSON
files (`home.json` → `/`, `events.json` → `/events`). Pages render them;
items with `"hidden": true` are not shown (the bot hides rather than deletes).
When moving another page's content into a JSON file, also list it in
`bot/rules.md`.

## Telegram content bot

`bot/` — runs on the Mac mini (`popeye`, over Tailscale) as launchd service
`org.rkmbelagavi.content-bot`; see `bot/README.md`.
