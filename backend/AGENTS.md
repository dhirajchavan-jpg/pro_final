# Repository Guidelines

## Project Structure & Module Organization

This Python 3.12 application provides a FastAPI procurement service and a durable background worker.
- `procurement/`: backend code; `understanding/` parses tenders, `evaluation/` assesses bids, `compliance/` applies policy, `platform/` handles infrastructure, and `workbench/` supports UI workflows.
- `frontend/`: HTML, CSS, and JavaScript assets; `frontend/modules/` separates model, view, and action logic and contains JavaScript tests.
- `alembic/versions/`: database migrations. `config/`: policy, document dictionaries, and prompt configuration.
- `scripts/windows/`: installation and service management; `docs/`: API contracts and operational acceptance procedures.
- `runtime/`: generated logs, jobs, caches, and local data; keep these out of commits.

## Build, Test, and Development Commands

Run from the repository root using Python 3.12:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -e .
.\.venv\Scripts\procurement-verify-config.exe
.\.venv\Scripts\python.exe -m alembic upgrade head
.\.venv\Scripts\procurement-api.exe
```

These create an environment, install dependencies and entry points, validate configuration, migrate PostgreSQL, and launch the API. Run `.\.venv\Scripts\procurement-worker.exe` in a second terminal.

Windows installations can use `Setup.bat`, `Start_All.bat`, and `Stop_All.bat`. Release packaging uses `scripts/build_release.py --source <installation> --output <new-directory> --archive <zip-path>`; the output directory must be outside the source installation.

## Coding Style & Naming Conventions

Use four-space Python indentation, snake_case functions/modules, PascalCase classes, and type annotations consistent with neighboring code. JavaScript uses two-space indentation, camelCase functions, and kebab-case module filenames. Preserve the existing model/view/actions separation. No formatter or linter is configured in `pyproject.toml`; avoid unrelated formatting changes.

## Testing Guidelines

Frontend tests use Node's built-in assertions. Run each `frontend/modules/*.test.mjs` file with a recent Node version, for example `node --experimental-default-type=module frontend/modules/checklist-model.test.mjs`. Place regression tests beside the affected module using `.test.mjs` names.

This release checkout lacks the Python `tests/` directory and several smoke scripts referenced by README. No coverage threshold is configured. Follow `docs/operations/LOCAL_ACCEPTANCE.md` for integration checks, including `/health`, `/ready`, and workbench behavior; live inference can incur charges.

## Commit & Pull Request Guidelines

History contains only short informal subjects, so no established commit convention exists. Use concise imperative subjects describing the change. PRs should explain behavior, validation performed, configuration or migration impact, and related issues when applicable. Include screenshots for UI changes.

## Security & Configuration

Use `.env.example` as the configuration reference. Never commit credentials, `.env`, uploaded procurement documents, or runtime data. Review release contents before sharing: the packaging script copies `.env` and preserves provider credentials.
