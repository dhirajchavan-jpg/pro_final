"""FastAPI application assembly."""

import os

from fastapi import FastAPI
from starlette.middleware.gzip import GZipMiddleware

from procurement.api import router as production_router
from procurement.fixed_pipeline_api import router as fixed_pipeline_router
from procurement.health import router as health_router
from procurement.legacy_api import router as legacy_router
from procurement.pipeline_api import router as pipeline_router
from procurement.platform.api_runtime import install as install_api_runtime
from procurement.platform.legacy_jobs import mark_stale_jobs
from procurement.workbench_api import router as workbench_router
from procurement.workbench_pages import router as workbench_pages_router


def startup_housekeeping() -> None:
    if os.getenv("APP_ENV", "development").strip().lower() != "production":
        mark_stale_jobs()


def create_app() -> FastAPI:
    app = FastAPI(title="Procurement Evaluation API")
    app.add_middleware(GZipMiddleware, minimum_size=1024, compresslevel=5)
    app.on_event("startup")(startup_housekeeping)
    install_api_runtime(app)
    for router in (
        health_router,
        legacy_router,
        production_router,
        fixed_pipeline_router,
        pipeline_router,
        workbench_router,
        workbench_pages_router,
    ):
        app.include_router(router)
    return app
