from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactOut

router = APIRouter()

@router.post("/", response_model=ContactOut, status_code=201)
def envoyer_message(data: ContactCreate, db: Session = Depends(get_db)):
    c = Contact(**data.model_dump())
    db.add(c)
    db.commit()
    db.refresh(c)
    return c

@router.get("/", response_model=List[ContactOut])
def get_messages(db: Session = Depends(get_db)):
    return db.query(Contact).order_by(Contact.created_at.desc()).all()

@router.put("/{id}/lu", response_model=ContactOut)
def marquer_lu(id: int, db: Session = Depends(get_db)):
    c = db.query(Contact).filter(Contact.id == id).first()
    c.lu = True
    db.commit()
    db.refresh(c)
    return c
