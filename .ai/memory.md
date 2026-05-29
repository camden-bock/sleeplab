# SleepLab Project Memory

## Project State Summary
SleepLab is an open-source health data platform focusing on local-first, privacy-focused health data.

### Project Structure
- `importer/`: Standalone Python scripts for data ingestion.
  - `importer/db.py`: Shared Postgres helpers.
- `server.py` / `api/`: FastAPI backend.
- `frontend/`: React frontend.
- `.ai/`: AI context and workspace.

### Core Conventions
- Session IDs from EDF files: `YYYYMMDD_HHMMSS`.
- Session IDs from SleepHQ: `sleephq-{record_id}`.
- Always check `session_exists()` before upsert in importers.

### Testing Commands
**Backend:**
- Lint: `ruff check tests/`
- Tests: `uv run pytest -v --tb=short` (Note: DB tests skip without Postgres)

**Frontend:**
- Type check: `cd frontend && npx tsc --noEmit -p tsconfig.app.json`
- Unit tests: `cd frontend && npx vitest run`

### Development Workflow
- Feature work on named branches (`feature/<topic>`).
- One PR per feature.
- Use Conventional Commits.
- `.newfeatures` is for local notes (never commit).
