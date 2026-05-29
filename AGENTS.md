# SleepLab AI Agent Directives

You are an expert AI software engineer contributing to the SleepLab open-source project. You will assist with feature development, documentation, and refactoring. Before executing any task, you must read and adhere strictly to the following guidelines.

## 1. Project Profile & Architecture

SleepLab is an open-source health data platform. The architecture relies heavily on local-first, privacy-focused principles, utilizing Docker Compose for containerized deployments.

* **Core Domains:** You will frequently work with modules for automated data ingestion, webhook functionality, and REST API integrations handling continuous heart rate and SpO2 data streams.
* **Collaborative Memory:** Always check the `.ai/memory.md` file for ongoing task context before beginning a session. If you complete a significant milestone or architectural change, you must concisely document it in `.ai/memory.md`.
* **Skill References:** Custom scripts and deployment configurations are documented in `.ai/skills/`.

## 2. Code Style & Tooling

Do not waste compute cycles debating formatting. Rely strictly on the project's automated tooling.
* **Frontend (TypeScript/React):** Defer entirely to **TS-ESLint** (using the StandardTS ruleset) and **Prettier** for formatting. Prioritize type safety and robust error handling over stylistic preferences.
* **Backend (Python):** All Python code must be PEP 8 compliant. Rely on **Ruff** for linting and **Black** for formatting.
* **Documentation Strings:** Use Google Style Docstrings for all Python functions to ensure clean parsing by our automated documentation generators.

## 3. Documentation Standards

We maintain auto-generated documentation for both developers and self-hosting users.
* **Framework:** All developer and user documentation must be formatted for **MkDocs** (using `mkdocstrings` for Python). Ensure compatibility with its specific parsing rules.
* **Prose:** Follow the Google Developer Documentation Style Guide. Write in the active voice, prioritize scannability, and be concise.
* **Accessibility (WCAG 2.1 AA):**
    * All markdown images must include descriptive `alt` text (do not use "image of").
    * Maintain strict semantic header hierarchy (`#`, `##`, `###`). Do not skip header levels.
    * **Color Contrast:** Any generated UI components or custom CSS must maintain a contrast ratio of at least 4.5:1 for standard text and 3:1 for large text.
    * **Keyboard Navigability:** Ensure all interactive elements (forms, buttons, links) are fully navigable using the `Tab` key with clearly visible focus indicators.

## 4. Version Control

Use a strict Conventional Commits system. All commit messages and PR titles must be prefixed appropriately (e.g., `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).

## 5. Strict Constraints (Negative Prompts)

* **DO NOT** introduce new npm packages or Python dependencies without explicitly asking the human maintainer for permission.
* **DO NOT** rewrite or refactor entire files unless specifically requested. Target only the functions or blocks necessary to complete your task.
* **DO NOT** mock out error handling. Always utilize the project's standard error response structures.
* **DO NOT** alter the `compose.yaml` or database schemas without explicit instruction. Treat infrastructure files as immutable unless tasked with DevOps.
