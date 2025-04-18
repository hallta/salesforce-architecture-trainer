"""
Course and Module models for the PlatformPro application.
"""
from typing import List, Optional
from sqlalchemy import Column, String, Integer, ForeignKey, JSON, Text
from sqlalchemy.orm import relationship

from .base import Base
from .user import CohortType


class Module(Base):
    """Module model representing individual training modules."""

    __tablename__ = "modules"

    id = Column(String(36), primary_key=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    order = Column(Integer, nullable=False)
    content = Column(Text, nullable=False)
    
    # Quiz content for different cohorts
    quiz_content = Column(JSON, nullable=False)  # Dictionary of cohort-specific quizzes
    
    # Metadata
    estimated_duration = Column(Integer, nullable=False)  # in minutes
    difficulty_level = Column(String(20), nullable=False)
    prerequisites = Column(JSON, nullable=True)  # List of prerequisite module IDs
    
    # Relationships
    course_id = Column(String(36), ForeignKey("courses.id"), nullable=False)
    course = relationship("Course", back_populates="modules")
    # progress = relationship("Progress", back_populates="module")

    def get_quiz_for_cohort(self, cohort_type: CohortType) -> dict:
        """Get cohort-specific quiz content."""
        return self.quiz_content.get(cohort_type, self.quiz_content["general"])

    def __repr__(self) -> str:
        """String representation of Module model."""
        return f"<Module {self.title}>"


class Course(Base):
    """Course model representing a collection of training modules."""

    __tablename__ = "courses"

    id = Column(String(36), primary_key=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    
    # Course metadata
    total_modules = Column(Integer, default=0)
    total_duration = Column(Integer, default=0)  # in minutes
    skill_level = Column(String(20), nullable=False)
    tags = Column(JSON, nullable=True)
    
    # Relationships
    modules = relationship("Module", back_populates="course", order_by="Module.order")
    # enrollments = relationship("Enrollment", back_populates="course")

    def __repr__(self) -> str:
        """String representation of Course model."""
        return f"<Course {self.title}>"

    def update_metadata(self) -> None:
        """Update course metadata based on modules."""
        self.total_modules = len(self.modules)
        self.total_duration = sum(m.estimated_duration for m in self.modules) 