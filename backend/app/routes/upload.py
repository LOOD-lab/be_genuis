from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import uuid

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png", "webp", "gif", "JPG", "JPEG", "PNG", "WEBP"}
MAX_SIZE = 10 * 1024 * 1024  # 10MB

@router.post("/")
async def upload_image(file: UploadFile = File(...)):
    # Extraire l'extension
    filename_parts = file.filename.rsplit(".", 1)
    if len(filename_parts) < 2:
        raise HTTPException(status_code=400, detail="Fichier sans extension")
    
    ext = filename_parts[-1].lower()
    
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Extension '{ext}' non supportee. Utilisez: jpg, png, webp"
        )
    
    contents = await file.read()
    
    if len(contents) > MAX_SIZE:
        raise HTTPException(status_code=400, detail="Fichier trop lourd. Maximum 10MB.")
    
    if len(contents) == 0:
        raise HTTPException(status_code=400, detail="Fichier vide")

    new_filename = f"{uuid.uuid4().hex}.{ext}"
    filepath = os.path.join(UPLOAD_DIR, new_filename)
    
    with open(filepath, "wb") as f:
        f.write(contents)
    
    return {"url": f"/uploads/{new_filename}", "filename": new_filename}

@router.get("/list")
def list_images():
    if not os.path.exists(UPLOAD_DIR):
        return {"images": []}
    allowed = {"jpg", "jpeg", "png", "webp", "gif"}
    files = [
        f for f in os.listdir(UPLOAD_DIR)
        if f.rsplit(".", 1)[-1].lower() in allowed
    ]
    return {"images": [{"filename": f, "url": f"/uploads/{f}"} for f in sorted(files)]}

@router.delete("/{filename}")
def delete_image(filename: str):
    filepath = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Fichier non trouve")
    os.remove(filepath)
    return {"deleted": filename}
