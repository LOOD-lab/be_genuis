from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Evenement(Base):
    __tablename__ = "evenements"
    id = Column(Integer, primary_key=True, index=True)
    titre = Column(String(200), nullable=False)
    description = Column(Text)
    date_evenement = Column(DateTime, nullable=False)
    lieu = Column(String(300))
    edition = Column(String(50))
    entree_gratuite = Column(Boolean, default=True)
    image_url = Column(String(500))
    actif = Column(Boolean, default=True)
    created_at = Column(DateTime, default=func.now())
