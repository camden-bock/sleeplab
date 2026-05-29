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
