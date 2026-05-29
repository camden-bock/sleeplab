# SleepLab Collaborative Memory Ledger

<!-- Active agent ledger tracking completed milestones and ongoing sessions. Append new entries at the end. -->

---

## Completed Documentation Audit & Update (May 2026)

We audited, cleaned, and rebuilt the SleepLab documentation following strict project and accessibility standards (WCAG 2.1 AA, Google prose style, Active Voice, Google Style Python docstrings):

### 1. New Guides Created & Organized in `mkdocs.yml`:
- **User Guide (`docs/user-guide.md`):** Complete walkthrough of CPAP card import (UI & CLI), SleepHQ integration, timezone configurations (`MACHINE_TZ`/`DISPLAY_TZ`), AI summaries configuration (OpenAI, Ollama, LiteLLM, Custom), and troubleshooting.
- **Contributing Guide (`docs/contributing.md`):** Outlines local dev workspace setup, coding standards (PEP 8, TS-ESLint, Google Style Docstrings), accessibility standards, git conventional commits, and quality gates.
- **Testing Guide (`docs/testing.md`):** Covers backend pytest structure, frontend vitest component testing, and CI verification workflows.
- **SleepHQ Sync Guide (`docs/sleephq-integration.md`):** Comprehensive guide detailing OAuth2 credentials setup, data bridging, timezone mapping, rates/retry exponential backoffs, pagination politeness, CLI/UI sync utilities, and programmatic FastAPI integration.
- **CPAP Autosync Guide (`docs/cpap-autosync-integration.md`):** Walkthrough updated to alert developers that direct ESP32 `CPAP_data_uploader` is **not functional**, referencing the pending `cpap_autosync` utility designed for containerized docker compose stacks and Home Assistant (HACS) integrations in `open-cpap/cpap-monitor`, `open-cpap/cpap-monitor-docker`, and `open-cpap/hacs-cpap-monitor` projects on GitLab.
- **Root `llms.txt` Protocol Manifest (`llms.txt`):** Established the universal AI index manifest at the root directory listing architecture logs (`.claude/governance.md`), ledgers (`.ai/memory.md`), developer guides (`contributing.md`, `testing.md`), and end-user setup guides to prevent agent configuration drift and orient visiting models.

### 2. Codebase Style & Formatting Audit:
- **Python Backend:** Successfully achieved **100% compliance** across all backend modules under Ruff lint checks. Resolved all remaining legacy Ruff errors (N806 variable casing inside `import_sessions.py` and E402/F841 imports ordering and unused variables inside `test_sleephq_fetch.py`). Active modules are formatted.
- **React Frontend:** Cataloged 32 style problems inside untouched legacy frontend files (related to synchronous `setState` in effects, Vite Fast Refresh exports, and loose `any` types), preserving strict monorepo scope isolation guidelines.
- **Documentation Standards:** Verified all newly created documentation files conform to strict header semantic hierarchies and descriptive alternative graphics tags under WCAG 2.1 AA.

### 3. Pydantic Models & Router Docstrings Addition (May 2026)
- **Governance Update:** Added JSDoc standards directive to `.claude/governance.md` under the TypeScript & React coding standards block, ensuring future UI code utilizes TypeDoc compatibility.
- **Python Backend:** Updated `api/models.py`, `api/routers/auth.py`, and `api/routers/upload.py` to add exhaustive Google-style docstrings (including descriptive attributes, args, returns, and raises fields) on all Pydantic request/response models, dataclasses, helper functions, and API route handlers.
- **Rules Compilation:** Regenerated downstream rules templates (`AGENTS.md`, `.cursor/rules/governance.mdc`) from the updated governance blueprint using `npx crag compile`.
- **Quality Verification & Commit:** Ran `uv run ruff format .` and `uv run ruff check .` to auto-format and lint the entire backend, verified that all Python unit tests pass, and executed a clean `npm run docs:build` to confirm MkDocs and TypeDoc documentation builds are healthy. Successfully committed and pushed the changes to remote branch `docs/update`.

### 4. Test Suite and Script Documentation (May 2026)
- **Python Tests & Scripts:** Documented all 13 Python test files inside `tests/` (`conftest.py`, `test_auth.py`, `test_config.py`, `test_equipment.py`, `test_health.py`, `test_import.py`, `test_importer_timezone.py`, `test_local_import.py`, `test_oximeter_parser.py`, `test_oximeter_upload.py`, `test_sessions.py`, `test_wearable.py`) and automation script `scripts/check_migrations.py` with comprehensive, Google-style docstrings for all fixtures, classes, and test functions.
- **Auto-Formatting & Lint Verification:** Cleanly reformatted all modified test and script files using `uv run ruff format .`, verified 100% compliance under `uv run ruff check .`, and executed all test suites successfully. Changes have been committed and pushed to `docs/update`.


