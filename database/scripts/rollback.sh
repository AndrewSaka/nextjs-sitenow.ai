#!/usr/bin/env bash
set -euo pipefail

CONTAINER="sitenow-postgres"
DB_USER="sitenow_ai"
DB_NAME="sitenow_ai"
MIGRATIONS_DIR="$(cd "$(dirname "$0")/../migrations" && pwd)"

if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
    echo "Error: Container '${CONTAINER}' is not running."
    exit 1
fi

echo "Rolling back all migrations..."
for file in "$MIGRATIONS_DIR"/*_down_*.sql; do
    [ -f "$file" ] || continue
    echo "  -> $(basename "$file")"
    docker exec -i "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -v ON_ERROR_STOP=1 < "$file"
done

echo ""
echo "Rollback complete."
docker exec "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -c "\dt"
