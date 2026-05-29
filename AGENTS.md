<!-- crag:auto-start -->
# AGENTS.md

> Generated from governance.md by [crag](https://crag.sh). Regenerate: `crag compile --target agents-md`

## Project: Unnamed


## Quality Gates

All changes must pass these checks before commit:

### Lint
1. `uv run ruff check .`
2. `uv run ruff format --check .`
3. `cd frontend && npm run lint`

### Test
1. `uv run pytest -v --tb=short`
2. `cd frontend && npx vitest run`

### Build
1. `npm run build`

### Ci (inferred from workflow)
1. `uv run ruff check tests/ --output-format=github`
2. `uv run pytest -v --tb=short`
3. `npx tsc --noEmit`
4. `npx vitest run`
5. `npx semantic-release`

## Coding Standards

- Runtimes: node, python
- Follow project commit conventions

## Security

- No hardcoded secrets — grep for sk_live, AKIA, password= before commit

## Workflow

1. Read `governance.md` at the start of every session — it is the single source of truth.
2. Run all mandatory quality gates before committing.
3. If a gate fails, fix the issue and re-run only the failed gate.
4. Use the project commit conventions for all changes.

<!-- crag:auto-end -->
