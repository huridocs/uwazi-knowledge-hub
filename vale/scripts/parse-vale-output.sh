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

# Capture stdout, stderr, and the exit code separately. Vale's exit codes:
#   0 = ran cleanly (alerts may still be present in JSON)
#   1 = ran with alerts at/above minAlertLevel (config dependent)
#   2 = runtime error (e.g. MDX parse crash) — NO lint ran, stdout is empty,
#       the E100 payload goes to stderr. This MUST NOT be read as a clean pass.
STDOUT_FILE=$(mktemp)
STDERR_FILE=$(mktemp)
trap 'rm -f "$STDOUT_FILE" "$STDERR_FILE"' EXIT INT TERM

set +e
vale --output JSON --minAlertLevel warning "$TARGET" >"$STDOUT_FILE" 2>"$STDERR_FILE"
VALE_EXIT=$?
set -e

# Runtime error: exit code >= 2, or an E100 payload on either stream.
# Surface it as a real error so the evaluator FAILs and the writer fixes it.
if [[ "$VALE_EXIT" -ge 2 ]] || grep -q 'E100' "$STDERR_FILE" "$STDOUT_FILE" 2>/dev/null; then
  RUNTIME=$(python3 - "$STDERR_FILE" "$STDOUT_FILE" <<'PYEOF'
import sys, json, re

def read(p):
    try:
        with open(p) as f:
            return f.read()
    except OSError:
        return ""

text = read(sys.argv[1]) or read(sys.argv[2])

# Vale wraps the runtime error as a JSON object with a "Text" field.
payload = text
try:
    obj = json.loads(text)
    payload = obj.get("Text", text)
except (json.JSONDecodeError, ValueError):
    pass

line = "?"
reason = ""
m = re.search(r"\[(\d+):\d+:\s*(.+?)\]", payload, re.S)
if m:
    line = m.group(1)
    reason = m.group(2)
else:
    rm = re.search(r"reason:\s*'(.+?)'", payload, re.S)
    if rm:
        reason = rm.group(1)
if not reason:
    reason = "Vale could not parse the file (runtime error)."

reason = " ".join(reason.split())
print(f"line: {line}")
print(f"reason: {reason}")
PYEOF
)
  RT_LINE=$(printf '%s\n' "$RUNTIME" | sed -n 's/^line: //p')
  RT_REASON=$(printf '%s\n' "$RUNTIME" | sed -n 's/^reason: //p')

  echo "## Vale result"
  echo "errors: 1"
  echo "warnings: 0"
  echo ""
  echo "## Errors (must fix — zero tolerance)"
  echo "- Line ${RT_LINE:-?}: Vale.Runtime — ${RT_REASON:-Vale runtime error.}"
  exit 0
fi

JSON=$(cat "$STDOUT_FILE")

# Empty stdout with a clean exit means a file with zero alerts. A clean run
# emits "{}", but treat any empty/null stdout at exit 0/1 as a genuine pass.
if [[ -z "$JSON" ]] || [[ "$JSON" == "null" ]] || [[ "$JSON" == "{}" ]]; then
  echo "## Vale result"
  echo "errors: 0"
  echo "warnings: 0"
  echo ""
  echo "All checks passed."
  exit 0
fi

# Write JSON to a temp file so Python can read it independently of stdin
TMPJSON=$(mktemp)
trap 'rm -f "$STDOUT_FILE" "$STDERR_FILE" "$TMPJSON"' EXIT INT TERM
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

echo "## Vale result"
echo "$COUNTS"
