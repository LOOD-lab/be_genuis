from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.evenement import Evenement
from app.schemas.evenement import EvenementCreate, EvenementUpdate, EvenementOut

router = APIRouter()

@router.get("/", response_model=List[EvenementOut])
def get_evenements(db: Session = Depends(get_db)):
    return db.query(Evenement).filter(Evenement.actif == True).all()

@router.get("/{id}", response_model=EvenementOut)
def get_evenement(id: int, db: Session = Depends(get_db)):
    ev = db.query(Evenement).filter(Evenement.id == id).first()
    if not ev:
        raise HTTPException(status_code=404, detail="Evenement non trouve")
    return ev

@router.post("/", response_model=EvenementOut, status_code=201)
def create_evenement(data: EvenementCreate, db: Session = Depends(get_db)):
    ev = Evenement(**data.model_dump())
    db.add(ev)
    db.commit()
    db.refresh(ev)
    return ev

@router.put("/{id}", response_model=EvenementOut)
def update_evenement(id: int, data: EvenementUpdate, db: Session = Depends(get_db)):
    ev = db.query(Evenement).filter(Evenement.id == id).first()
    if not ev:
        raise HTTPException(status_code=404, detail="Evenement non trouve")
    for k, v in data.model_dump().items():
        setattr(ev, k, v)
    db.commit()
    db.refresh(ev)
    return ev

@router.delete("/{id}", status_code=204)
def delete_evenement(id: int, db: Session = Depends(get_db)):
    ev = db.query(Evenement).filter(Evenement.id == id).first()
    if not ev:
        raise HTTPException(status_code=404, detail="Evenement non trouve")
    db.delete(ev)
    db.commit()
