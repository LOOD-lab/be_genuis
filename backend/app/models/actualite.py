from sqlalchemy import Column, Integer, String, DateTime, Boolean, Text
from sqlalchemy.sql import func
from app.core.database import Base

class Actualite(Base):
    __tablename__ = "actualites"
    id = Column(Integer, primary_key=True, index=True)
    titre = Column(String(200), nullable=False)
    contenu = Column(Text)
    resume = Column(String(500))
    image_url = Column(String(500))
    publie = Column(Boolean, default=False)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
