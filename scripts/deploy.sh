#!/bin/bash
# The only way to put rkmbelagavi.org live: `npm run deploy`.
# Refuses unless the code being deployed is exactly what GitHub main has, so
# the live site can always be rolled back from GitHub and nobody's change
# (yours, another Mac's, or the Telegram content bot's) gets overwritten.
set -e
cd "$(dirname "$0")/.."

git fetch --quiet origin main
branch=$(git rev-parse --abbrev-ref HEAD)
fail() { echo "❌ Not deploying: $1"; exit 1; }

[ "$branch" = "main" ] || fail "you are on branch '$branch'. Merge into main and push first."
[ -z "$(git status --porcelain)" ] || fail "there are uncommitted changes. Commit and push them first."
[ "$(git rev-list --count HEAD..origin/main)" = 0 ] || fail "GitHub has newer changes. Run 'git pull --ff-only' first."
[ "$(git rev-list --count origin/main..HEAD)" = 0 ] || fail "your commits aren't on GitHub yet. Run 'git push' first."

TOKEN_ARGS=()
if [ -f "$HOME/.claude/vercel.json" ]; then
  TOKEN=$(python3 -c "import json,os;print(json.load(open(os.path.expanduser('~/.claude/vercel.json')))['old_account']['token'])")
  TOKEN_ARGS=(--token "$TOKEN")
fi
echo "Deploying $(git log -1 --format='%h %s') to production…"
vercel --prod --yes "${TOKEN_ARGS[@]}"
