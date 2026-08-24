#!/bin/bash
# Full-directory Vale check, run when a vocabulary file (vale/styles/config)
# or a custom rule definition (vale/styles/Uwazi) changes. Such a change can
# affect every doc, not just the staged one, so this ignores any filenames
# lint-staged appends and always lints all of docs/.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec bash "$SCRIPT_DIR/vale-check.sh" docs
