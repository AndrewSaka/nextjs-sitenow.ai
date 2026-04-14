-- Seed data for local development

INSERT INTO coming_soon_signups (email, privacy_accepted, consent_at)
VALUES
    ('alice@example.com',   true, CURRENT_TIMESTAMP),
    ('bob@example.com',     true, CURRENT_TIMESTAMP),
    ('claire@example.com',  true, CURRENT_TIMESTAMP),
    ('david@example.com',   true, CURRENT_TIMESTAMP),
    ('emma@example.com',    true, CURRENT_TIMESTAMP),
    ('frank@example.com',   true, CURRENT_TIMESTAMP),
    ('greta@example.com',   true, CURRENT_TIMESTAMP),
    ('hans@example.com',    true, CURRENT_TIMESTAMP)
ON CONFLICT (email) DO NOTHING;
