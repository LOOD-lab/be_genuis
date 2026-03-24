from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.rapport import Rapport
from app.schemas.rapport import RapportCreate, RapportOut

router = APIRouter()

@router.get("/", response_model=List[RapportOut])
def get_rapports(db: Session = Depends(get_db)):
    return db.query(Rapport).order_by(Rapport.created_at.desc()).all()

@router.post("/", response_model=RapportOut, status_code=201)
def create_rapport(data: RapportCreate, db: Session = Depends(get_db)):
    r = Rapport(**data.model_dump())
    db.add(r)
    db.commit()
    db.refresh(r)
    return r

@router.delete("/{id}", status_code=204)
def delete_rapport(id: int, db: Session = Depends(get_db)):
    r = db.query(Rapport).filter(Rapport.id == id).first()
    if not r:
        raise HTTPException(status_code=404, detail="Rapport non trouve")
    db.delete(r)
    db.commit()
