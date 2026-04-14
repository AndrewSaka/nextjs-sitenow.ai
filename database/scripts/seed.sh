#!/usr/bin/env bash
set -euo pipefail

CONTAINER="sitenow-postgres"
DB_USER="sitenow_ai"
DB_NAME="sitenow_ai"
SEED_FILE="$(cd "$(dirname "$0")/.." && pwd)/seed.sql"

if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
    echo "Error: Container '${CONTAINER}' is not running."
    exit 1
fi

echo "Seeding database..."
docker exec -i "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -v ON_ERROR_STOP=1 < "$SEED_FILE"
echo "Seed complete."

docker exec "$CONTAINER" psql -U "$DB_USER" -d "$DB_NAME" -c "SELECT * FROM signups_by_country;"
