#!/usr/bin/env bash
set -euo pipefail

CONTAINER="sitenow-postgres"
VOLUME="sitenow-postgres-data"

echo "WARNING: This will destroy the database container and all data."
read -rp "Type RESET to confirm: " confirm
if [ "$confirm" != "RESET" ]; then
    echo "Aborted."
    exit 1
fi

echo "Stopping and removing container..."
docker compose down -v 2>/dev/null || true
docker volume rm "$VOLUME" 2>/dev/null || true

echo "Recreating container..."
docker compose up -d

echo "Waiting for PostgreSQL to start..."
sleep 3
until docker exec "$CONTAINER" pg_isready -U sitenow_ai -q 2>/dev/null; do
    sleep 1
done

echo "Running migrations..."
bash "$(dirname "$0")/migrate.sh"

echo ""
echo "Reset complete. Run 'npm run db:seed' to add test data."
