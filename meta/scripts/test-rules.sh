#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
FIXTURES_DIR="$PROJECT_ROOT/meta/tests/fixtures"
RULE_FILTER="${1:-}"

if ! command -v vale &> /dev/null; then
  echo "Error: vale not installed. See meta/vale-integration.mdx for setup."
  exit 1
fi

PASS=0
FAIL=0
ERRORS=()

shopt -s nullglob
for fixture_dir in "$FIXTURES_DIR"/*/; do
  rule=$(basename "$fixture_dir")

  if [ -n "$RULE_FILTER" ] && [ "$rule" != "$RULE_FILTER" ]; then
    continue
  fi

  config="$fixture_dir/.vale.ini"
  invalid_file="$fixture_dir/invalid.md"
  valid_file="$fixture_dir/valid.md"

  if [ ! -f "$config" ] || [ ! -f "$invalid_file" ] || [ ! -f "$valid_file" ]; then
    echo "SKIP: $rule (missing .vale.ini, invalid.md, or valid.md)"
    continue
  fi

  # invalid.md must produce at least one alert
  invalid_count=$({ vale --output JSON --config "$config" "$invalid_file" 2>/dev/null || true; } \
    | python3 -c \
      "import json,sys; d=json.load(sys.stdin); print(sum(len(v) for v in d.values()))" \
    2>/dev/null || echo "0")

  if [ "$invalid_count" -gt 0 ]; then
    echo "PASS: $rule/invalid.md ($invalid_count alert(s))"
    PASS=$((PASS + 1))
  else
    echo "FAIL: $rule/invalid.md (expected alerts, got 0)"
    ERRORS+=("$rule/invalid.md")
    FAIL=$((FAIL + 1))
  fi

  # valid.md must produce zero alerts
  valid_count=$({ vale --output JSON --config "$config" "$valid_file" 2>/dev/null || true; } \
    | python3 -c \
      "import json,sys; d=json.load(sys.stdin); print(sum(len(v) for v in d.values()))" \
    2>/dev/null || echo "0")

  if [ "$valid_count" -eq 0 ]; then
    echo "PASS: $rule/valid.md"
    PASS=$((PASS + 1))
  else
    echo "FAIL: $rule/valid.md (expected 0 alerts, got $valid_count)"
    ERRORS+=("$rule/valid.md")
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "Results: $PASS passed, $FAIL failed"

if [ ${#ERRORS[@]} -gt 0 ]; then
  echo "Failed:"
  for err in "${ERRORS[@]}"; do
    echo "  - $err"
  done
  exit 1
fi

exit 0
