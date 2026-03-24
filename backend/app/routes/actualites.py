from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.actualite import Actualite
from app.schemas.actualite import ActualiteCreate, ActualiteUpdate, ActualiteOut

router = APIRouter()

@router.get("/", response_model=List[ActualiteOut])
def get_actualites(db: Session = Depends(get_db)):
    return db.query(Actualite).filter(Actualite.publie == True).order_by(Actualite.created_at.desc()).all()

@router.get("/admin/all", response_model=List[ActualiteOut])
def get_all_actualites(db: Session = Depends(get_db)):
    return db.query(Actualite).order_by(Actualite.created_at.desc()).all()

@router.get("/{id}", response_model=ActualiteOut)
def get_actualite(id: int, db: Session = Depends(get_db)):
    a = db.query(Actualite).filter(Actualite.id == id).first()
    if not a:
        raise HTTPException(status_code=404, detail="Actualite non trouvee")
    return a

@router.post("/", response_model=ActualiteOut, status_code=201)
def create_actualite(data: ActualiteCreate, db: Session = Depends(get_db)):
    a = Actualite(**data.model_dump())
    db.add(a)
    db.commit()
    db.refresh(a)
    return a

@router.put("/{id}", response_model=ActualiteOut)
def update_actualite(id: int, data: ActualiteUpdate, db: Session = Depends(get_db)):
    a = db.query(Actualite).filter(Actualite.id == id).first()
    if not a:
        raise HTTPException(status_code=404, detail="Actualite non trouvee")
    for k, v in data.model_dump().items():
        setattr(a, k, v)
    db.commit()
    db.refresh(a)
    return a

@router.delete("/{id}", status_code=204)
def delete_actualite(id: int, db: Session = Depends(get_db)):
    a = db.query(Actualite).filter(Actualite.id == id).first()
    if not a:
        raise HTTPException(status_code=404, detail="Actualite non trouvee")
    db.delete(a)
    db.commit()
