-- Migration: 001_coming_soon_signups
-- Description: Create coming_soon_signups table, indexes, views, and triggers
-- Date: 2026-04-14

-- Function: auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Table
CREATE TABLE IF NOT EXISTS coming_soon_signups (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) NOT NULL,
    ip_address      VARCHAR(45),
    user_agent      TEXT,
    privacy_accepted BOOLEAN NOT NULL DEFAULT false,
    consent_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Unique constraint: one signup per email
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'uq_signups_email'
    ) THEN
        ALTER TABLE coming_soon_signups
            ADD CONSTRAINT uq_signups_email UNIQUE (email);
    END IF;
END $$;

-- Trigger: auto-update updated_at
DROP TRIGGER IF EXISTS update_signups_timestamp ON coming_soon_signups;
CREATE TRIGGER update_signups_timestamp
    BEFORE UPDATE ON coming_soon_signups
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- View: recent signups
CREATE OR REPLACE VIEW recent_signups AS
SELECT *
FROM coming_soon_signups
ORDER BY created_at DESC;
