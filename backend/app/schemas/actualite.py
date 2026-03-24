from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ActualiteBase(BaseModel):
    titre: str
    contenu: Optional[str] = None
    resume: Optional[str] = None
    image_url: Optional[str] = None
    publie: bool = False

class ActualiteCreate(ActualiteBase):
    pass

class ActualiteUpdate(ActualiteBase):
    pass

class ActualiteOut(ActualiteBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True
