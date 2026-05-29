# SleepLab AI Governance & System Directives

This is the single source of truth for all AI agents contributing to the SleepLab project. Modifications to code styling, linting, architectural boundaries, or workflows must be made *only* in this file. Downstream configurations are compiled automatically via `crag`.

---

## 1. Core Architecture & File Mapping

SleepLab is a local-first, privacy-focused health data platform combining a Python backend, an independent data importer, and a TypeScript/React frontend.

### Backend Pipeline (`/api`, `/importer`)
*   **Target Globs:** `api/**/*.py`, `importer/**/*.py`, `server.py`
*   **Domain Focus:** Automated data ingestion, webhook functionality, and REST API integrations handling continuous heart rate and SpO2 streams.
*   **Parsing Protocol:** Importers process binary or complex health files (e.g., EDF formats, SleepHQ fields). Always leverage existing validation schemas in `api/models.py`.

### Frontend Application (`/frontend`)
*   **Target Globs:** `frontend/src/**/*.{ts,tsx}`
*   **Domain Focus:** Time-series dashboards, metrics visualization (split-charts, heatmaps), and session details.

### AI Context & Workspace (`.ai/`)
*   **Target Globs:** `.ai/**/*`
*   **Directory Integrity:** Do not corrupt this workspace with vendor-specific configurations. Maintain a clean repository structure by storing all collaborative states here.

---

## 2. Engineering & Documentation Style Standards

### Python Ecosystem
*   **Style Standards:** Enforce PEP 8 strictly using **Ruff** for linting and **Black** for formatting.
*   **Docstrings:** Must follow **Google Style Docstrings** precisely to ensure clean syntax for automated documentation platforms (e.g., MkDocs/Docusaurus).

### TypeScript/React Ecosystem
*   **Style Standards:** Enforce **TS-ESLint** and **Prettier** formatting patterns.
*   **Code Quality:** Prioritize absolute type safety. Avoid type bypassing (`any`) unless manipulating raw, unpredictable incoming telemetry frames during early stage parsing.

### Universal Documentation & WCAG 2.1 AA
When editing user-facing documentation or generating frontend UI components, you must adhere to strict accessibility protocols:
*   **Semantic Structure:** Use a strict heading hierarchy (`#` followed by `##`, then `###`). Do not skip heading levels for visual sizing.
*   **Media Assets:** All Markdown images must include descriptive `alt` text. Avoid redundant phrases like "image of".
*   **Contrast Bounds:** Any generated React interfaces or custom CSS layers must strictly pass a contrast ratio of at least 4.5:1 for standard text and 3:1 for large text.
*   **Keyboard Layouts:** Verify that all navigation links, search inputs, and popovers are fully navigable via the `Tab` key with highly visible focus rings.

---

## 3. Collaborative Memory & Workflow Protocols

Agents must actively maintain state asynchronously across local and remote contributor environments using the specific `.ai/` subdirectories:

### Task Tracking
*   **Active Ledger (`.ai/memory.md`):** Read this file before initiating any work session to check the chronological ledger of completed tasks, active debugging notes, and architectural updates. You must append a concise summary of your changes upon completing a task.

### Operational Blueprints
*   **Personas (`.ai/personas/`):** Refer to these instructions when initialized into specific modular roles (e.g., `data-ingestion-expert.md`, `ui-ux-designer.md`).
*   **Checklists (`.ai/workflows/`):** Follow or write multi-step, technical checklists for complex or highly repeatable tasks, such as adding support for a completely new wearable data stream protocol or running database safely.

---

## 4. Operational Guardrails (Negative Prompts)

*   **Dependency Restrictions:** Do not inject new `pip` requirements, `npm` packages, or backend middleware unless explicitly permitted by a human maintainer.
*   **Scope Isolation:** Do not blindly rewrite or refactor surrounding codeblocks. Modify only the targeted lines or specific components required to complete the task.
*   **Error Structures:** Do not stub or mock out error catch mechanisms. Always pass operational failures through SleepLab's standard error response architecture.
*   **Database Schema & Infrastructure:** Treat SQL migration chains (`/migrations`), schemas (`schema.sql`), and Docker orchestrations (`compose.yaml`) as immutable unless explicitly assigned to a database or DevOps task.
