#!/bin/bash
# Bring this checkout up to date with GitHub before any work starts.
# Runs automatically when a Claude Code session opens in this repo
# (.claude/settings.json → SessionStart). Safe to run by hand: it only ever
# fast-forwards, and it never touches uncommitted work.
cd "$(dirname "$0")/.." || exit 0

if ! git fetch --quiet origin main 2>/dev/null; then
  echo "⚠️ RKM site: could not reach GitHub to check for newer changes. Run 'git pull' before editing."
  exit 0
fi

branch=$(git rev-parse --abbrev-ref HEAD)
behind=$(git rev-list --count HEAD..origin/main)
ahead=$(git rev-list --count origin/main..HEAD)
dirty=$(git status --porcelain)

if [ "$branch" = "main" ] && [ -z "$dirty" ] && [ "$ahead" = 0 ]; then
  if [ "$behind" -gt 0 ]; then
    git merge --quiet --ff-only origin/main && echo "✅ RKM site: pulled $behind new change(s) from GitHub. Now at $(git log -1 --format='%h %s')."
  else
    echo "✅ RKM site: already up to date with GitHub ($(git log -1 --format='%h %s'))."
  fi
  exit 0
fi

echo "⚠️ RKM site is NOT in sync with GitHub — sort this out before making changes:"
[ "$branch" != "main" ] && echo "  • on branch '$branch', not main"
[ -n "$dirty" ] && echo "  • uncommitted changes:" && git status --short | sed 's/^/      /'
[ "$behind" -gt 0 ] && echo "  • GitHub has $behind newer commit(s) not pulled yet (git pull --ff-only)"
[ "$ahead" -gt 0 ] && echo "  • $ahead local commit(s) not pushed to GitHub yet (git push)"
exit 0
