BEGIN;

-- Track where SpO2/pulse data was imported from ('resmed' = direct EDF, 'sleephq' = via SleepHQ API)
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS spo2_source TEXT;

-- Mirobody wearable integration settings per user
ALTER TABLE user_import_settings
    ADD COLUMN IF NOT EXISTS mirobody_url TEXT,
    ADD COLUMN IF NOT EXISTS mirobody_token TEXT;

COMMIT;
