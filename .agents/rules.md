# AI Governance Rules

1. **Execution Model:** Always use single-flow task execution (`superpowers`). Do NOT spawn multiple agents unless explicitly instructed.
2. **Git Branches:** Feature work goes on named branches (`feature/<topic>`) with one PR per feature. Ensure your `git config user.name` and `git config user.email` are set before committing.
3. **Private files:** `.newfeatures` contains local implementation notes, never commit or push.
4. **Dependencies:** `requirements.txt` uses pinned versions for PyPI packages. Git-sourced deps use PEP 440 direct-reference syntax: `pkg @ git+https://...`
5. **Testing:** Run the full suite before committing, pushing, or opening PRs. See testing commands in standard docs.
