-- Migration: coming_soon_signups
-- Description: Create coming_soon_signups table, indexes, views, and triggers
-- Date: 2026-04-14

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE IF NOT EXISTS coming_soon_signups (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) NOT NULL,
    ip_address      VARCHAR(45),
    user_agent      TEXT,
    privacy_accepted BOOLEAN NOT NULL DEFAULT false,
    consent_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_signups_email UNIQUE (email)
);

CREATE TRIGGER update_signups_timestamp
    BEFORE UPDATE ON coming_soon_signups
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE VIEW recent_signups AS
SELECT *
FROM coming_soon_signups
ORDER BY created_at DESC;
