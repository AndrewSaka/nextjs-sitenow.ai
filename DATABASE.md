# SiteNow.ai Database Setup & Operations Guide

Complete documentation for the database infrastructure, including local development with Docker, production deployment on Supabase, migrations, and keeping schemas in sync.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup (Docker)](#local-development-setup-docker)
4. [Database Schema](#database-schema)
5. [Migrations](#migrations)
6. [Supabase Setup](#supabase-setup)
7. [Connecting to Supabase](#connecting-to-supabase)
8. [Keeping Local & Supabase Schemas in Sync](#keeping-local--supabase-schemas-in-sync)
9. [Migrating to a New Supabase Project](#migrating-to-a-new-supabase-project)
10. [Environment Variables](#environment-variables)
11. [Application Database Layer](#application-database-layer)
12. [Workflow Reference](#workflow-reference)

---

## Architecture Overview

```
+-------------------+        +------------------------+
|  Local Dev (Mac)  |        |   Production (Vercel)  |
|                   |        |                        |
|  Next.js App      |        |  Next.js App           |
|       |           |        |       |                |
|  node-postgres    |        |  node-postgres         |
|  (pg library)     |        |  (pg library + SSL)    |
|       |           |        |       |                |
|  localhost:5435   |        |  Supabase PostgreSQL   |
|       |           |        |  (pooler port 6543)    |
|  Docker:          |        |                        |
|  postgres:16-     |        +------------------------+
|  alpine           |
+-------------------+
```

- **Local**: PostgreSQL 16 via Docker, exposed on port **5435** (avoids conflicts with system Postgres or other Docker projects on 5432/5433)
- **Production**: Supabase-hosted PostgreSQL 17, connected via transaction pooler on port 6543
- **ORM**: None. Raw SQL via `node-postgres` (`pg` library) with a custom query/transaction wrapper
- **Migrations**: Hand-written SQL files, run via bash scripts locally and via Supabase CLI for production

---

## Prerequisites

- **Docker Desktop** (or Docker Engine + Docker Compose)
- **Node.js** >= 18
- **npm** (comes with Node.js)
- **Supabase CLI** (`npm install -g supabase` or `brew install supabase/tap/supabase`)
- **psql** (optional, for direct DB access outside Docker)

---

## Local Development Setup (Docker)

### 1. Docker Compose Configuration

The file `docker-compose.yml` defines the local PostgreSQL instance:

```yaml
services:
  postgres:
    image: postgres:16-alpine
    container_name: sitenow-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${POSTGRES_DB:-sitenow_ai}
      POSTGRES_USER: ${POSTGRES_USER:-sitenow_ai}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-sitenow_ai}
    ports:
      - "5435:5432"      # Host port 5435 -> Container port 5432
    volumes:
      - sitenow-postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U sitenow_ai"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  sitenow-postgres-data:
    name: sitenow-postgres-data
```

Key details:
- **Image**: `postgres:16-alpine` (lightweight)
- **Port**: `5435` on host (avoids collision with local Postgres or other Docker projects)
- **Credentials**: default `sitenow_ai` / `sitenow_ai` / `sitenow_ai` (DB, user, password)
- **Persistence**: Named volume `sitenow-postgres-data` survives container restarts
- **Health check**: `pg_isready` ensures container reports healthy only when Postgres is accepting connections

### 2. Environment File

The file `.env.database` in the project root:

```env
# Local PostgreSQL Configuration
# Used by docker-compose.yml

POSTGRES_DB=sitenow_ai
POSTGRES_USER=sitenow_ai
POSTGRES_PASSWORD=sitenow_ai

# Connection string for your application
DATABASE_URL=postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai
```

Also set in `.env.local` for the Next.js app:

```env
DATABASE_URL=postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai
```

### 3. Starting the Database

```bash
# Start the container (detached)
npm run db:start
# or: docker compose up -d

# Verify it's running
docker ps | grep sitenow-postgres

# Check logs
npm run db:logs
# or: docker compose logs -f postgres
```

### 4. Running Migrations

```bash
npm run db:migrate
```

This runs `database/scripts/migrate.sh`, which:
1. Checks the Docker container is running
2. Waits for `pg_isready` to confirm the database is accepting connections
3. Executes all files matching `database/migrations/[0-9]*_*.sql` (excluding `_down_` rollback files), in version order
4. Prints the list of tables after completion

### 5. Seeding Test Data

```bash
npm run db:seed
```

Runs `database/seed.sql` which inserts 8 test email signups.

### 6. npm Scripts

| Command | Description |
|---------|-------------|
| `npm run db:start` | Start the PostgreSQL Docker container |
| `npm run db:stop` | Stop the container (data persists) |
| `npm run db:migrate` | Run all pending forward migrations |
| `npm run db:rollback` | Roll back to a clean state (drops all tables) |
| `npm run db:seed` | Insert test data |
| `npm run db:reset` | **Destructive**: removes container + volume, recreates, re-migrates |
| `npm run db:shell` | Open an interactive `psql` session inside the container |
| `npm run db:logs` | Tail PostgreSQL container logs |

### 7. Connecting via psql

```bash
# Via npm script (interactive)
npm run db:shell

# Or directly
docker exec -it sitenow-postgres psql -U sitenow_ai -d sitenow_ai

# Or from host (requires psql installed)
psql postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai
```

---

## Database Schema

### Tables

#### `coming_soon_signups`

Stores email subscriptions from the coming soon signup form.

| Column | Type | Constraints |
|--------|------|-------------|
| id | UUID | PK, auto-generated |
| email | VARCHAR(255) | NOT NULL, UNIQUE |
| ip_address | VARCHAR(45) | Nullable — IPv4 or IPv6 |
| user_agent | TEXT | Nullable |
| privacy_accepted | BOOLEAN | NOT NULL, default false |
| consent_at | TIMESTAMPTZ | When the user accepted the privacy policy |
| created_at | TIMESTAMPTZ | NOT NULL, default CURRENT_TIMESTAMP |
| updated_at | TIMESTAMPTZ | NOT NULL, auto-updated via trigger |

**Unique constraint**: `(email)` — each email can only sign up once. On conflict, the existing record is updated (upsert).

### Views

| View | Description |
|------|-------------|
| `recent_signups` | All signups ordered by most recent first |

### Functions

| Function | Description |
|----------|-------------|
| `update_updated_at()` | Trigger function: sets `updated_at = CURRENT_TIMESTAMP` on row update |

### Triggers

- `update_signups_timestamp` on `coming_soon_signups` — fires `BEFORE UPDATE`, calls `update_updated_at()`

### Indexes

```sql
-- Implicit from unique constraint:
uq_signups_email  ON coming_soon_signups(email)
```

---

## Migrations

### File Structure

```
database/
  migrations/
    001_coming_soon_signups.sql           # Core table, indexes, functions, triggers, views
    001_down_coming_soon_signups.sql      # Rollback: drop everything
  scripts/
    migrate.sh                            # Run all forward migrations
    rollback.sh                           # Run full rollback
    seed.sh                               # Insert test data
    reset.sh                              # Nuclear reset: destroy + recreate + migrate
  seed.sql                                # Test data
```

### Naming Convention

- Forward: `NNN_description.sql` (e.g., `001_coming_soon_signups.sql`)
- Rollback: `NNN_down_description.sql` (e.g., `001_down_coming_soon_signups.sql`)
- The `_down_` in the filename is how `migrate.sh` excludes rollback files

### Writing a New Migration

1. Create the forward migration file:
   ```bash
   touch database/migrations/002_your_change.sql
   ```

2. Write idempotent SQL (use `IF NOT EXISTS`, `IF EXISTS`, `OR REPLACE`):
   ```sql
   -- Migration: 002_your_change
   -- Description: What this migration does
   -- Date: YYYY-MM-DD

   CREATE TABLE IF NOT EXISTS your_table (
       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
       ...
   );
   ```

3. Create the rollback file:
   ```bash
   touch database/migrations/002_down_your_change.sql
   ```

4. Run locally:
   ```bash
   npm run db:migrate
   ```

5. Create the corresponding Supabase migration (see [Keeping Schemas in Sync](#keeping-local--supabase-schemas-in-sync)).

### Important Notes

- Migrations are **not tracked** in a migrations table. The `migrate.sh` script runs ALL forward files every time. This works because all statements use `IF NOT EXISTS` / `CREATE OR REPLACE` / `ON CONFLICT DO NOTHING` to be idempotent.
- There is no automatic "last applied" tracking. If you need that, consider adding a `schema_migrations` table.
- The rollback script runs all `*_down_*` files. Individual rollbacks must be run manually.

---

## Supabase Setup

### Creating a New Supabase Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click **New Project**
3. Choose your organization
4. Set project name, database password, and region (choose closest to your users)
5. Wait for the project to provision

### Supabase CLI Configuration

The file `supabase/config.toml` configures the Supabase CLI:

```toml
[project]
id = "sitenow-ai"

[db]
port = 54322
shadow_port = 54320
major_version = 17

[db.migrations]
enabled = true

[db.seed]
enabled = true
sql_paths = ["./seed.sql"]
```

### Linking to Your Supabase Project

```bash
# Login to Supabase
supabase login

# Link to your remote project
supabase link --project-ref <your-project-ref>
# The project ref is the subdomain in your Supabase URL:
# https://db.<project-ref>.supabase.co
```

### Running Migrations on Supabase

```bash
# Push all migrations to the remote database
supabase db push

# Dry run first to preview
supabase db push --dry-run
```

### Supabase Migration Files

```
supabase/migrations/
  20260414000001_coming_soon_signups.sql    # Initial schema
```

---

## Connecting to Supabase

### Connection URLs

Supabase provides two connection methods:

1. **Transaction Pooler (port 6543)** - Use for the application (serverless-friendly):
   ```
   postgres://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:6543/postgres
   ```

2. **Direct Connection (port 5432)** - Use for migrations and admin tasks:
   ```
   postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```

You can find these in your Supabase dashboard under **Settings > Database > Connection string**.

### Application Connection

The app (`src/lib/db.ts`) connects using this priority:

```typescript
const connectionString =
  process.env.SUPABASE_DATABASE_URL ||   // Production: pooler URL
  process.env.DATABASE_URL ||             // Fallback
  'postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai';  // Local default
```

- In production, SSL is enabled (`rejectUnauthorized: false` for Supabase's self-signed cert)
- Connection pool: max 20 clients, 30s idle timeout, 2s connection timeout

### Testing the Connection

```bash
# Local
psql postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai -c "SELECT NOW();"

# Or via npm
npm run db:shell
```

---

## Keeping Local & Supabase Schemas in Sync

This is the most critical operational workflow. The project maintains two parallel sets of migration files:

| Local (Docker) | Supabase |
|----------------|----------|
| `database/migrations/001_coming_soon_signups.sql` | `supabase/migrations/20260414000001_coming_soon_signups.sql` |

### Workflow: Adding a New Schema Change

#### Step 1: Develop locally

```bash
# 1. Make sure Docker DB is running
npm run db:start

# 2. Write and test your migration SQL
#    Create: database/migrations/002_your_change.sql

# 3. Run it locally
npm run db:migrate

# 4. Test your app against the changes
npm run dev
```

#### Step 2: Create the Supabase migration

```bash
# Option A: Create manually with the Supabase CLI
supabase migration new your_change
# This creates: supabase/migrations/YYYYMMDDHHMMSS_your_change.sql
# Copy the SQL content from your local migration file into it

# Option B: Use db diff to auto-generate (if you have supabase local running)
supabase start
# Apply your changes to the local supabase db, then:
supabase db diff -f your_change
```

#### Step 3: Push to Supabase production

```bash
# Preview what will run
supabase db push --dry-run

# Push for real
supabase db push
```

#### Step 4: Verify

```bash
# Connect to production and check
psql "postgres://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:6543/postgres"
\dt   # List tables
\d coming_soon_signups   # Describe table
```

### Handling Schema Drift

If the local and Supabase schemas get out of sync:

```bash
# 1. Dump the current Supabase schema
supabase db dump -f supabase/schema_dump.sql

# 2. Compare with your local migrations
# Review the dump vs your migration files

# 3. Generate a diff migration if needed
supabase db diff -f fix_drift

# 4. Apply the fix to both environments
```

---

## Migrating to a New Supabase Project

Step-by-step guide for setting up an identical database in a new Supabase project.

### Step 1: Create the New Project

1. Create a new project on [supabase.com/dashboard](https://supabase.com/dashboard)
2. Note down:
   - Project reference ID (from the URL)
   - Database password (set during creation)
   - Connection strings (from Settings > Database)

### Step 2: Update Supabase Config

Edit `supabase/config.toml`:

```toml
[project]
id = "your-new-project-name"
```

### Step 3: Link to the New Project

```bash
supabase link --project-ref <new-project-ref>
```

### Step 4: Push All Migrations

```bash
supabase db push
```

### Step 5: Verify the Schema

```bash
psql "postgres://postgres:[NEW-PASSWORD]@db.[NEW-PROJECT-REF].supabase.co:6543/postgres"

-- Check all tables exist
\dt

-- Check table structure
\d coming_soon_signups

-- Check views
\dv

-- Check functions
\df

-- Check indexes
\di
```

### Step 6: Update Environment Variables

Update your deployment environment (Vercel, etc.) with the new connection strings:

```env
SUPABASE_DATABASE_URL=postgres://postgres:[NEW-PASSWORD]@db.[NEW-PROJECT-REF].supabase.co:6543/postgres
SUPABASE_DATABASE_DIRECT_URL=postgresql://postgres:[NEW-PASSWORD]@db.[NEW-PROJECT-REF].supabase.co:5432/postgres
```

### Step 7: (Optional) Migrate Data

If you need to move data from the old project:

```bash
# Export data from old project (use direct connection, port 5432)
pg_dump "postgres://postgres:[OLD-PASSWORD]@db.[OLD-REF].supabase.co:5432/postgres" \
  --data-only \
  --no-owner \
  --no-privileges \
  -f data_export.sql

# Import into new project (use direct connection, port 5432)
psql "postgres://postgres:[NEW-PASSWORD]@db.[NEW-REF].supabase.co:5432/postgres" \
  -f data_export.sql
```

**Use the direct connection (port 5432) for pg_dump/psql imports, not the pooler (port 6543).**

---

## Environment Variables

### Local Development

File: `.env.database` (used by Docker Compose)

```env
POSTGRES_DB=sitenow_ai
POSTGRES_USER=sitenow_ai
POSTGRES_PASSWORD=sitenow_ai
DATABASE_URL=postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai
```

Also set in `.env.local` for the Next.js app:

```env
DATABASE_URL=postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai
```

### Production (Vercel / Hosting)

```env
# Transaction pooler - for the application (serverless)
SUPABASE_DATABASE_URL=postgres://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:6543/postgres

# Direct connection - for migrations/admin only
SUPABASE_DATABASE_DIRECT_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### Connection Priority in Code

The app resolves the connection string in this order:
1. `SUPABASE_DATABASE_URL` (production)
2. `DATABASE_URL` (fallback)
3. `postgresql://sitenow_ai:sitenow_ai@localhost:5435/sitenow_ai` (hardcoded local default)

---

## Application Database Layer

The app does NOT use an ORM. It uses raw SQL via `node-postgres` (`pg` library).

### Key Files

| File | Purpose |
|------|---------|
| `src/lib/db.ts` | Connection pool, `query()`, `transaction()`, `healthCheck()`, `closePool()` |
| `src/lib/signups-db.ts` | Coming-soon signup operations: `insertSignup()`, `getSignups()`, `getSignupCount()` |
| `src/app/api/coming-soon/route.ts` | API endpoint that receives form submissions and saves to DB |

### Connection Pool Config

```typescript
{
  max: 20,                      // Max pool size
  idleTimeoutMillis: 30000,     // Close idle connections after 30s
  connectionTimeoutMillis: 2000, // Fail fast on connection issues
  ssl: production ? { rejectUnauthorized: false } : undefined
}
```

### Usage Patterns

**Simple query:**
```typescript
import { query } from '@/lib/db';
const result = await query<ComingSoonSignup>(
  'SELECT * FROM coming_soon_signups WHERE email = $1',
  ['user@example.com']
);
```

**Transaction:**
```typescript
import { transaction } from '@/lib/db';
await transaction(async (client) => {
  await client.query('INSERT INTO coming_soon_signups ...', [...]);
  // more operations...
});
```

**Using the signups helper:**
```typescript
import { insertSignup, getSignups, getSignupCount } from '@/lib/signups-db';

// Insert (upserts on email conflict)
const signup = await insertSignup({
  email: 'user@example.com',
  ipAddress: '1.2.3.4',
  userAgent: 'Mozilla/5.0...',
  privacyAccepted: true,
});

// Get all signups (most recent first)
const allSignups = await getSignups();

// Get total signup count
const count = await getSignupCount();
```

### Data Flow: Form Submission

```
User fills Coming Soon form
  |
Component submits: email, privacyAccepted
  |
POST /api/coming-soon
  |
API route: validates, extracts IP + user-agent
  |
insertSignup() -> INSERT INTO coming_soon_signups ... ON CONFLICT DO UPDATE
  |
Response: { message: "Thank you! ..." }
```

---

## Workflow Reference

### Daily Development Workflow

```bash
# 1. Start the database
npm run db:start

# 2. Run the app
npm run dev

# 3. When done
npm run db:stop
```

### Adding a New Feature That Needs Schema Changes

```bash
# 1. Start DB
npm run db:start

# 2. Create migration
touch database/migrations/002_your_feature.sql
# Write your SQL

# 3. Create rollback
touch database/migrations/002_down_your_feature.sql
# Write rollback SQL

# 4. Apply locally
npm run db:migrate

# 5. Test
npm run dev

# 6. Create Supabase migration
supabase migration new your_feature
# Copy SQL into the generated file

# 7. Push to Supabase production
supabase db push

# 8. Commit everything
git add database/migrations/ supabase/migrations/
git commit -m "feat: add your_feature schema"
```

### Full Reset (Nuclear Option)

```bash
npm run db:reset
# Type "RESET" to confirm
# Optionally seed: npm run db:seed
```

### Debugging Database Issues

```bash
# Check if container is running
docker ps | grep sitenow-postgres

# View logs
npm run db:logs

# Open interactive shell
npm run db:shell

# Inside psql:
\dt          -- list tables
\d coming_soon_signups  -- describe table
\di          -- list indexes
\dv          -- list views
\df          -- list functions
SELECT * FROM recent_signups LIMIT 10;
```

### Deploying Schema Changes to Production

```bash
# 1. Ensure local and Supabase migrations match
# 2. Dry run
supabase db push --dry-run
# 3. Push
supabase db push
# 4. Verify
psql "<SUPABASE_DIRECT_URL>" -c "\dt"
```

---

## Quick Reference Card

| Task | Command |
|------|---------|
| Start local DB | `npm run db:start` |
| Stop local DB | `npm run db:stop` |
| Run migrations | `npm run db:migrate` |
| Seed test data | `npm run db:seed` |
| Reset everything | `npm run db:reset` |
| Open DB shell | `npm run db:shell` |
| View DB logs | `npm run db:logs` |
| Create Supabase migration | `supabase migration new <name>` |
| Push to Supabase | `supabase db push` |
| Dump Supabase schema | `supabase db dump -f dump.sql` |
| Diff schemas | `supabase db diff -f <name>` |
| Link new project | `supabase link --project-ref <ref>` |
