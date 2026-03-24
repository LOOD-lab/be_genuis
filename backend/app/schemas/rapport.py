from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class RapportBase(BaseModel):
    titre: str
    annee: Optional[str] = None
    description: Optional[str] = None
    fichier_url: Optional[str] = None

class RapportCreate(RapportBase):
    pass

class RapportOut(RapportBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True
