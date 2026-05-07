#!/bin/bash
# Run Vale on $1, output structured feedback for the evaluator-optimizer loop.
# Usage: ./parse-vale-output.sh <path-to-draft.mdx>
# Output: markdown-formatted feedback with error/warning counts and line-level detail.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
TARGET="${1:-}"

if [[ -z "$TARGET" ]]; then
  echo "Usage: $0 <path-to-draft.mdx>" >&2
  exit 1
fi

cd "$PROJECT_ROOT"
export PATH="$PROJECT_ROOT/node_modules/.bin:$PATH"

if ! command -v vale &>/dev/null; then
  echo "Error: vale not installed. See vale/vale-integration.mdx for setup." >&2
  exit 1
fi

# Capture JSON output; suppress non-zero exit (vale exits 1 when alerts found)
JSON=$(vale --output JSON --minAlertLevel warning "$TARGET" 2>/dev/null || true)

if [[ -z "$JSON" ]] || [[ "$JSON" == "null" ]]; then
  echo "## Vale result"
  echo "errors: 0"
  echo "warnings: 0"
  echo ""
  echo "All checks passed."
  exit 0
fi

# Write JSON to a temp file so Python can read it independently of stdin
TMPJSON=$(mktemp)
printf '%s' "$JSON" > "$TMPJSON"

# Count errors and warnings using python3 (available on macOS by default)
COUNTS=$(python3 - "$TARGET" "$TMPJSON" <<'PYEOF'
import sys, json

target = sys.argv[1]
jsonfile = sys.argv[2]

try:
    with open(jsonfile) as f:
        data = json.load(f)
except (json.JSONDecodeError, FileNotFoundError, ValueError):
    print("errors: 0\nwarnings: 0")
    sys.exit(0)

alerts = []
for path_alerts in data.values():
    alerts.extend(path_alerts)

errors = [a for a in alerts if a.get("Severity") == "error"]
warnings = [a for a in alerts if a.get("Severity") == "warning"]

print(f"errors: {len(errors)}")
print(f"warnings: {len(warnings)}")
print("")

if errors:
    print("## Errors (must fix — zero tolerance)")
    for a in sorted(errors, key=lambda x: x.get("Line", 0)):
        line = a.get("Line", "?")
        check = a.get("Check", "")
        msg = a.get("Message", "").strip()
        print(f"- Line {line}: {check} — {msg}")
    print("")

if warnings:
    print("## Warnings (fix if above threshold)")
    for a in sorted(warnings, key=lambda x: x.get("Line", 0)):
        line = a.get("Line", "?")
        check = a.get("Check", "")
        msg = a.get("Message", "").strip()
        print(f"- Line {line}: {check} — {msg}")
PYEOF
)

rm -f "$TMPJSON"

echo "## Vale result"
echo "$COUNTS"
