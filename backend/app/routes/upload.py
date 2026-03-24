from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.staticfiles import StaticFiles
import shutil
import os
import uuid

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"]
MAX_SIZE = 5 * 1024 * 1024  # 5MB

@router.post("/")
async def upload_image(file: UploadFile = File(...)):
    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(status_code=400, detail="Format non supporte. Utilisez JPG, PNG ou WebP.")
    
    contents = await file.read()
    if len(contents) > MAX_SIZE:
        raise HTTPException(status_code=400, detail="Fichier trop lourd. Maximum 5MB.")
    
    ext = file.filename.split(".")[-1].lower()
    filename = f"{uuid.uuid4().hex}.{ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)
    
    with open(filepath, "wb") as f:
        f.write(contents)
    
    return { "url": f"/uploads/{filename}", "filename": filename }

@router.get("/list")
def list_images():
    if not os.path.exists(UPLOAD_DIR):
        return {"images": []}
    files = [f for f in os.listdir(UPLOAD_DIR) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))]
    return {"images": [{"filename": f, "url": f"/uploads/{f}"} for f in files]}

@router.delete("/{filename}")
def delete_image(filename: str):
    filepath = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Fichier non trouve")
    os.remove(filepath)
    return {"deleted": filename}
