from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class EvenementBase(BaseModel):
    titre: str
    description: Optional[str] = None
    date_evenement: datetime
    lieu: Optional[str] = None
    edition: Optional[str] = None
    entree_gratuite: bool = True
    image_url: Optional[str] = None
    actif: bool = True

class EvenementCreate(EvenementBase):
    pass

class EvenementUpdate(EvenementBase):
    pass

class EvenementOut(EvenementBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True
