from sqlalchemy import Column, String, DateTime
from sqlalchemy.sql import func
from app.core.database import Base

class SiteSetting(Base):
    __tablename__ = "site_settings"
    key = Column(String(100), primary_key=True)
    value = Column(String(1000))
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())
