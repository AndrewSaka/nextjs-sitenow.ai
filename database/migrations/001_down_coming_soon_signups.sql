-- Rollback: 001_coming_soon_signups
-- Drops all objects created by the forward migration

DROP VIEW IF EXISTS recent_signups;
DROP TRIGGER IF EXISTS update_signups_timestamp ON coming_soon_signups;
DROP TABLE IF EXISTS coming_soon_signups;
DROP FUNCTION IF EXISTS update_updated_at();
