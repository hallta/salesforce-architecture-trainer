"""
Progress tracking models for the PlatformPro application.
"""
from datetime import datetime
from typing import Optional

from sqlalchemy import Column, String, Integer, ForeignKey, JSON, DateTime, Float, Boolean
from sqlalchemy.orm import relationship

from .base import Base


class Progress(Base):
    """Progress model for tracking user progress through modules."""

    __tablename__ = "progress"

    id = Column(String(36), primary_key=True)
    
    # Relationships
    user_id = Column(String(36), ForeignKey("users.id"), nullable=False)
    module_id = Column(String(36), ForeignKey("modules.id"), nullable=False)
    
    # Progress tracking
    started_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    is_completed = Column(Boolean, default=False)
    last_position = Column(Integer, default=0)  # Last position in content
    
    # Relationships
    user = relationship("User", back_populates="progress")
    module = relationship("Module", back_populates="progress")
    quiz_results = relationship("QuizResult", back_populates="progress")

    def __repr__(self) -> str:
        """String representation of Progress model."""
        return f"<Progress user={self.user_id} module={self.module_id}>"

    def complete(self) -> None:
        """Mark progress as completed."""
        self.is_completed = True
        self.completed_at = datetime.utcnow()


class QuizResult(Base):
    """Quiz result model for tracking user quiz attempts."""

    __tablename__ = "quiz_results"

    id = Column(String(36), primary_key=True)
    
    # Relationships
    progress_id = Column(String(36), ForeignKey("progress.id"), nullable=False)
    
    # Quiz attempt data
    score = Column(Float, nullable=False)
    answers = Column(JSON, nullable=False)  # User's answers
    feedback = Column(JSON, nullable=True)  # Feedback for each answer
    attempt_number = Column(Integer, default=1)
    completed_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    progress = relationship("Progress", back_populates="quiz_results")

    def __repr__(self) -> str:
        """String representation of QuizResult model."""
        return f"<QuizResult progress={self.progress_id} score={self.score}>"

    @property
    def passed(self) -> bool:
        """Check if quiz attempt was successful."""
        return self.score >= 0.7  # 70% passing threshold 