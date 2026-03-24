from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Rapport(Base):
    __tablename__ = "rapports"
    id = Column(Integer, primary_key=True, index=True)
    titre = Column(String(200), nullable=False)
    annee = Column(String(10))
    description = Column(Text)
    fichier_url = Column(String(500))
    created_at = Column(DateTime, default=func.now())
