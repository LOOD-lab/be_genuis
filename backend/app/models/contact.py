from sqlalchemy import Column, Integer, String, DateTime, Text, Boolean
from sqlalchemy.sql import func
from app.core.database import Base

class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(100), nullable=False)
    email = Column(String(200), nullable=False)
    telephone = Column(String(20))
    message = Column(Text, nullable=False)
    lu = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())
