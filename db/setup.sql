BEGIN;

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message text
);

INSERT INTO messages (message) VALUES ('hello world');

COMMIT;