"""
PlatformPro - Main Application Entry Point

This module initializes the FastAPI application and includes all necessary middleware
and route configurations.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

# Create FastAPI app instance
app = FastAPI(
    title="PlatformPro API",
    description="API for the Salesforce Platform Training Portal",
    version="1.0.0",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    """Root endpoint returning API status."""
    return JSONResponse({
        "status": "healthy",
        "service": "PlatformPro API",
        "version": "1.0.0"
    })

# Import and include routers
# from app.api import users, auth, courses, progress
# app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
# app.include_router(users.router, prefix="/api/users", tags=["Users"])
# app.include_router(courses.router, prefix="/api/courses", tags=["Courses"])
# app.include_router(progress.router, prefix="/api/progress", tags=["Progress"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 