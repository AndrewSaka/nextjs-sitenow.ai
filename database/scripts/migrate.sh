#!/usr/bin/env bash
set -euo pipefail

CONTAINER="sitenow-postgres"
DB_USER="sitenow_ai"
DB_NAME="sitenow_ai"
MIGRATIONS_DIR="$(cd "$(dirname "$0")/../migrations" && pwd)"

# Check container is running
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
    echo "Error: Container '${CONTAINER}' is not running. Run 'npm run db:start' first."
    exit 1
fi

# Wait for postgres to be ready
echo "Waiting for PostgreSQL to be ready..."
until docker exec "$CONTAINER" pg_isready -U sitenow_ai -q; do
    sleep 1
done
echo "PostgreSQL is ready."

# Run forward migrations (exclude _down_ files)
echo ""
echo "Running migrations..."
for file in "$MIGRATIONS_DIR"/[0-9]*_*.sql; do
    [ -f "$file" ] || continue
    # Skip rollback files
    if [[ "$(basename "$file")" == *"_down_"* ]]; then
        continue
    fi
    echo "  -> $(basename "$file")"
    docker exec -i "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -v ON_ERROR_STOP=1 < "$file"
done

# Print table list
echo ""
echo "Current tables:"
docker exec "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -c "\dt"
echo ""
echo "Migrations complete."
