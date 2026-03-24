from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactCreate(BaseModel):
    nom: str
    email: EmailStr
    telephone: Optional[str] = None
    message: str

class ContactOut(ContactCreate):
    id: int
    lu: bool
    created_at: datetime
    class Config:
        from_attributes = True
