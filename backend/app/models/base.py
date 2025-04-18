"""
Base model configuration for SQLAlchemy models.
"""
from datetime import datetime
from typing import Any

from sqlalchemy.ext.declarative import as_declarative, declared_attr
from sqlalchemy import Column, DateTime


@as_declarative()
class Base:
    """Base class for all database models."""
    
    id: Any
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    @declared_attr
    def __tablename__(cls) -> str:
        """Generate __tablename__ automatically from class name."""
        return cls.__name__.lower()

    def dict(self) -> dict:
        """Convert model instance to dictionary."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns} 