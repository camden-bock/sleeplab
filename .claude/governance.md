# SleepLab AI Governance & System Directives

This is the single source of truth for all AI agents and agentic systems contributing to the SleepLab project. Modifications to code styling, architectural boundaries, or workflows must be made *only* in this file. Downstream configurations are compiled automatically via `crag`.

---

## Gates

### Lint
- uv run ruff check .
- uv run ruff format --check .
- cd frontend && npm run lint

### Test
- uv run pytest -v --tb=short
- cd frontend && npx vitest run

### Build
- npm run build

### CI (inferred from workflow)
- uv run ruff check tests/ --output-format=github
- uv run pytest -v --tb=short
- npx tsc --noEmit
- npx vitest run
- npx semantic-release

---

## 1. Architectural Boundaries & File Map

SleepLab is a local-first, privacy-focused health data platform built with a modular monorepo structure. All agents must operate within these designated modules:

- **Frontend Application (`/frontend`):** TypeScript, React 19, Vite, and Recharts. Focuses on interactive oximetry and CPAP data visualization.
- **Backend API Server (`/api`, `/server.py`):** FastAPI application with SQLAlchemy integration handling session, user, and equipment logic.
- **CPAP Telemetry Importer (`/importer`):** Core Python binaries and scripts parsing ResMed DATALOG directories and binary EDF files.
- **SQL Schema & Migrations (`/migrations`, `/schema.sql`):** PostgreSQL database structure. Existing migrations are **immutable** and must not be altered.

---

## 2. Coding & Design Standards

### Python (Backend)
- All Python source code must be PEP 8 compliant, formatted via **Ruff/Black**, and linted via **Ruff**.
- Every function, method, and class must include complete docstrings formatted according to the **Google Style Guide** (documenting Args, Returns, and Raises).

### TypeScript & React (Frontend)
- Adhere strictly to **TS-ESLint** standard ruleset and **Prettier** formatting configurations.
- Focus on strong type safety, robust state management, and descriptive error handling. Do not mock catch blocks.

### Web Accessibility (WCAG 2.1 AA)
- **Contrast Ratios:** Standard body text must maintain >= `4.5:1` contrast; large headings must maintain >= `3:1`.
- **Keyboard Access:** All forms, fields, buttons, and links must support logical keyboard tab index order with active visible focus indicators.
- **Semantic Structure:** Follow strict header hierarchy (`#` -> `##` -> `###`). Do not skip header levels.
- **Descriptive Graphics:** All image assets and diagrams in markdown or UI components must declare descriptive `alt` tags (avoiding "image of..." phrasing).

### Version Control & Commits
- We use a strict **Conventional Commits** format. All pull requests, commits, and tags must start with clean prefixes: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`.

---

## 4. Agent Memory & Collaborative Workflows

To prevent task drift and ensure smooth coordination across multiple parallel agents:
- **LEDGER OF WORK:** Every agent completing a task must append a concise summary of milestones, architectural decisions, and next steps to the end of [`.ai/memory.md`](file:///home/camden/ZedProjects/sleeplab/.ai/memory.md).
- **BLUEPRINTS:** Consult the rules, personas, and workflows located inside `.ai/` before initiating major features.
- **LLMS.TXT PROTOCOL:** Maintain and respect the [`llms.txt`](file:///home/camden/ZedProjects/sleeplab/llms.txt) manifest at the root directory. Any agent adding, removing, or significantly restructuring documentation guides must update the universal manifest index links to keep it in sync.
