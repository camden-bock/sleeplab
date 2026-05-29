## 4. Repository AI Architecture & Superpowers Framework
You must strictly respect the unified project memory framework. Do not create vendor-specific root files (like CLAUDE.md or .claude directories).

### Collaborative Memory Directory (.ai/)
*   **Memory Ledger:** Always check `.ai/memory.md` at the start of a session for rolling task context, architectural decisions, or blocks. Upon completing a major feature, optimization, or integration, append a concise summary to this ledger.
*   **Automated Skills:** Custom utility scripts, migration check hooks, and platform-specific commands live in `.ai/skills/`. Reference them before writing scratch scripts.

### Superpowers Persona & Workflow Documentation
When acting within a specialized capacity, utilize and update the strict documentation hierarchies inside `.ai/`:
*   **Personas (`.ai/personas/`):** Strategic guidance for execution boundaries (e.g., `data-ingestion-expert.md`, `security-reviewer.md`).
*   **Workflows (`.ai/workflows/`):** Step-by-step technical execution protocols for repeatable tasks. If you are tasking a downstream agent or detailing a routine (e.g., *“Integrating a new continuous SpO2/Heart Rate data stream”*), document or follow the exact verification checklist inside this folder.

### Configuration Drift & Governance
*   The project rules are centrally managed by `crag` (Code Rules Auto Generator) via `governance.md`.
*   **DO NOT** modify `.cursor/rules/`, `GEMINI.md`, or other downstream configuration targets manually. All modifications to system prompts, Conventional Commit rules, or linting constraints must be updated strictly within the root `governance.md` file to prevent configuration drift.
