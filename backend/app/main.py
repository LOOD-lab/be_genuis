from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import engine, Base
from app.routes import evenements, actualites, contact, rapports, inscriptions, auth

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Be Genius API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(evenements.router, prefix="/api/evenements", tags=["Evenements"])
app.include_router(actualites.router, prefix="/api/actualites", tags=["Actualites"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])
app.include_router(rapports.router, prefix="/api/rapports", tags=["Rapports"])
app.include_router(inscriptions.router, prefix="/api/inscriptions", tags=["Inscriptions"])
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])

@app.get("/")
def root():
    return {"message": "Be Genius API is running"}
