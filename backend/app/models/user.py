"""
User model for the PlatformPro application.
"""
from enum import Enum
from typing import Optional

from sqlalchemy import Column, String, Enum as SQLEnum, Boolean
from sqlalchemy.orm import relationship

from .base import Base


class CohortType(str, Enum):
    """Enumeration of available cohort types."""
    
    ENGINEER = "engineer"
    PRODUCT_MANAGER = "product_manager"
    SALES = "sales"
    GENERAL = "general"


class User(Base):
    """User model representing platform users."""

    __tablename__ = "users"

    # Basic user information
    id = Column(String(36), primary_key=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    
    # Profile information
    cohort_type = Column(SQLEnum(CohortType), nullable=False)
    company = Column(String(255), nullable=True)
    job_title = Column(String(255), nullable=True)
    bio = Column(String(1000), nullable=True)
    
    # Account status
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    
    # Relationships
    # progress = relationship("Progress", back_populates="user")
    # quiz_results = relationship("QuizResult", back_populates="user")

    def __repr__(self) -> str:
        """String representation of User model."""
        return f"<User {self.email}>"

    @property
    def is_authenticated(self) -> bool:
        """Check if user is authenticated."""
        return True

    @property
    def display_name(self) -> str:
        """Get user's display name."""
        return self.full_name or self.email.split("@")[0]

    def verify_email(self) -> None:
        """Mark user's email as verified."""
        self.is_verified = True 