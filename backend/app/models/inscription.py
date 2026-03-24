from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Inscription(Base):
    __tablename__ = "inscriptions"
    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String(100), nullable=False)
    prenom = Column(String(100), nullable=False)
    email = Column(String(200), nullable=False)
    telephone = Column(String(20))
    evenement_id = Column(Integer, ForeignKey("evenements.id"))
    message = Column(Text)
    created_at = Column(DateTime, default=func.now())
