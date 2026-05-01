#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
cd "$PROJECT_ROOT"

if ! command -v vale &> /dev/null; then
  printf '\033[33mWarning:\033[0m vale not installed. Skipping prose lint.\n'
  printf 'See meta/vale-integration.mdx for setup instructions.\n'
  exit 0
fi

# Make mdx2vast available to vale without requiring global install
export PATH="$PROJECT_ROOT/node_modules/.bin:$PATH"

TARGET="${*:-docs}"

# Show all alerts (warnings + errors) for developer visibility
vale --minAlertLevel warning $TARGET || true

# Block only on error-level alerts (MinAlertLevel = error in .vale.ini)
vale --minAlertLevel error $TARGET > /dev/null 2>&1
