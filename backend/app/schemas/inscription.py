from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class InscriptionCreate(BaseModel):
    nom: str
    prenom: str
    email: EmailStr
    telephone: Optional[str] = None
    evenement_id: Optional[int] = None
    message: Optional[str] = None

class InscriptionOut(InscriptionCreate):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True
