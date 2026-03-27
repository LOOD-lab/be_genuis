from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Dict
from app.core.database import get_db
from app.models.setting import SiteSetting

router = APIRouter()

@router.get("/")
def get_settings(db: Session = Depends(get_db)):
    rows = db.query(SiteSetting).all()
    return {row.key: row.value for row in rows}

@router.post("/")
def set_setting(data: Dict[str, str], db: Session = Depends(get_db)):
    for key, value in data.items():
        existing = db.query(SiteSetting).filter(SiteSetting.key == key).first()
        if existing:
            existing.value = value
        else:
            db.add(SiteSetting(key=key, value=value))
    db.commit()
    return {"updated": list(data.keys())}
