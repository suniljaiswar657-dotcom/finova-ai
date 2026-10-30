from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FINOVA AI API",
    description="Backend foundation for the FINOVA AI financial intelligence platform.",
    version="0.1.0",
)

# Allow the production frontend and local development origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://finova-ai-sigma.vercel.app",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:3000",
    ],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["Accept", "Content-Type"],
)


@app.get("/")
async def root():
    return {
        "name": "FINOVA AI API",
        "version": "0.1.0",
        "docs": "/docs",
    }


@app.get("/api/health")
async def health():
    return {
        "status": "ok",
        "service": "finova-ai-api",
        "market_data": "not_configured",
        "message": "Backend is running. No live market feed is connected yet.",
    }
