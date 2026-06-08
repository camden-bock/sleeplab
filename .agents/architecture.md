# SleepLab Architecture Context

## Project Structure
- `importer/` — standalone Python scripts; run directly, not via the FastAPI app
- `importer/db.py` — shared Postgres helpers (`get_conn`, `upsert_session`, `session_exists`, etc.)
- `server.py` / `api/` — FastAPI backend
- `frontend/` — React frontend

## Importer Conventions
- Session IDs from EDF files: `YYYYMMDD_HHMMSS`
- Session IDs from SleepHQ: `sleephq-{record_id}` (namespaced to avoid collisions)
- Always check `session_exists()` before upsert; use `--force` / `skip_existing=False` to overwrite

## Testing Stack
- Backend: `pytest` and `ruff`
- Frontend: `vitest` and `tsc`
- CI runs `.github/workflows/ci.yml` automatically on every PR to `main`.
