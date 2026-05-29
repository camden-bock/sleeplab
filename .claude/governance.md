# SleepLab AI Governance & System Directives

This is the single source of truth for all AI agents contributing to the SleepLab project. Modifications to code styling, linting, architectural boundaries, or workflows must be made *only* in this file. Downstream configurations are compiled automatically via `crag`.

---

## Gates

### Lint
- uv run ruff check .
- uv run ruff format --check .

### Test
- uv run pytest

### Build
- npm run build

### CI (inferred from workflow)
- uv run ruff check tests/ --output-format=github
- uv run pytest -v --tb=short
- npx tsc --noEmit
- npx vitest run
- npx semantic-release

---

## Architecture

- **Project Profile:** SleepLab is a local-first, privacy-focused health data platform.
- **Backend Pipeline:** Python-based (`/api`, `/importer`). Handling automated data ingestion and heart rate/SpO2 streams.
- **Frontend Application:** TypeScript/React (`/frontend`). metrics visualization and time-series dashboards.
- **AI Workspace:** Unified `.ai/` directory for memory and skills.

---

## Conventions

- **Version Control:** Strict Conventional Commits system (feat:, fix:, docs:, chore:).
- **Python Style:** PEP 8 via Ruff and Black. Google Style Docstrings.
- **Frontend Style:** TS-ESLint (StandardTS ruleset) and Prettier.
- **Accessibility:** WCAG 2.1 AA. Descriptive alt text, semantic headers, 4.5:1 contrast, keyboard navigability.

---

## Workflow

- **Task Tracking:** Read `.ai/memory.md` before starting; append summary when done.
- **Blueprints:** Refer to `.ai/personas/` and `.ai/workflows/` for specialized tasks.

---

## Anti-Patterns

Do not:
- **Dependency Restrictions:** Do not inject new `pip` requirements or `npm` packages without permission.
- **Scope Isolation:** Do not rewrite or refactor entire files. Target only necessary blocks.
- **Error Structures:** Do not mock out error catch mechanisms. Use standard error responses.
- **Database & Infrastructure:** Treat SQL migrations, schemas, and Docker configs as immutable unless assigned.
