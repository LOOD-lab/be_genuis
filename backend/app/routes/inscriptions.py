from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.inscription import Inscription
from app.schemas.inscription import InscriptionCreate, InscriptionOut

router = APIRouter()

@router.post("/", response_model=InscriptionOut, status_code=201)
def inscrire(data: InscriptionCreate, db: Session = Depends(get_db)):
    i = Inscription(**data.model_dump())
    db.add(i)
    db.commit()
    db.refresh(i)
    return i

@router.get("/", response_model=List[InscriptionOut])
def get_inscriptions(db: Session = Depends(get_db)):
    return db.query(Inscription).order_by(Inscription.created_at.desc()).all()
