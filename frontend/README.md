# Tenderabl frontend

React renders the account, portfolio, admin and eight workflow screens. The modules under `src/modules` bind the existing workbench actions after React mounts the page. Dynamic evidence and review panels use the original renderers. Keep interactive IDs stable when editing components.

## Run the workbench

Start the copied FastAPI service and worker with the installation instructions in the sibling backend. The built React pages are already installed there. Open http://127.0.0.1:8000/workbench. The admin dashboard uses /workbench/admin and requires an administrator account.

For frontend development, run `npm ci` and `npm run dev` here. Open http://127.0.0.1:5173/workbench. Vite proxies API calls to http://127.0.0.1:8000. Set BACKEND_URL before starting Vite if the API runs on another port. For development, sign in through the Vite origin so the browser sends its session cookie there.

Run `npm test` for the existing frontend tests. Run `npm run build` followed by `npm run install:ui` to install both production bundles in the sibling backend. FastAPI serves the bundles at its existing asset routes.

This local copy uses the source installation's environment settings. Check database, object storage, and provider destinations before running jobs if you need an independent installation.

