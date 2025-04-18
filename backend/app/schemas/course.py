"""
Course and module schemas for the PlatformPro application.
"""
from datetime import datetime
from typing import Dict, List, Optional

from pydantic import BaseModel, constr


class ModuleBase(BaseModel):
    """Base module schema."""
    
    title: constr(min_length=1, max_length=255)
    description: str
    order: int
    content: str
    quiz_content: Dict[str, dict]  # Cohort-specific quiz content
    estimated_duration: int
    difficulty_level: str
    prerequisites: Optional[List[str]] = None


class ModuleCreate(ModuleBase):
    """Module creation schema."""
    
    pass


class ModuleUpdate(ModuleBase):
    """Module update schema."""
    
    title: Optional[constr(min_length=1, max_length=255)] = None
    description: Optional[str] = None
    order: Optional[int] = None
    content: Optional[str] = None
    quiz_content: Optional[Dict[str, dict]] = None
    estimated_duration: Optional[int] = None
    difficulty_level: Optional[str] = None


class ModuleResponse(ModuleBase):
    """Module response schema."""
    
    id: str
    course_id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        """Pydantic config."""
        
        from_attributes = True


class CourseBase(BaseModel):
    """Base course schema."""
    
    title: constr(min_length=1, max_length=255)
    description: str
    skill_level: str
    tags: Optional[List[str]] = None


class CourseCreate(CourseBase):
    """Course creation schema."""
    
    pass


class CourseUpdate(CourseBase):
    """Course update schema."""
    
    title: Optional[constr(min_length=1, max_length=255)] = None
    description: Optional[str] = None
    skill_level: Optional[str] = None
    tags: Optional[List[str]] = None


class CourseResponse(CourseBase):
    """Course response schema."""
    
    id: str
    total_modules: int
    total_duration: int
    created_at: datetime
    updated_at: datetime
    modules: List[ModuleResponse]

    class Config:
        """Pydantic config."""
        
        from_attributes = True 