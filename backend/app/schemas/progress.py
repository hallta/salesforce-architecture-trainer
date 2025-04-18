"""
Progress and quiz result schemas for the PlatformPro application.
"""
from datetime import datetime
from typing import Dict, List, Optional

from pydantic import BaseModel


class ProgressBase(BaseModel):
    """Base progress schema."""
    
    module_id: str


class ProgressCreate(ProgressBase):
    """Progress creation schema."""
    
    pass


class ProgressUpdate(ProgressBase):
    """Progress update schema."""
    
    last_position: Optional[int] = None
    is_completed: Optional[bool] = None


class QuizResultBase(BaseModel):
    """Base quiz result schema."""
    
    answers: Dict[str, str]  # Question ID to answer mapping


class QuizResultCreate(QuizResultBase):
    """Quiz result creation schema."""
    
    pass


class QuizResultResponse(QuizResultBase):
    """Quiz result response schema."""
    
    id: str
    progress_id: str
    score: float
    feedback: Dict[str, dict]
    attempt_number: int
    completed_at: datetime

    class Config:
        """Pydantic config."""
        
        from_attributes = True


class ProgressResponse(ProgressBase):
    """Progress response schema."""
    
    id: str
    user_id: str
    started_at: datetime
    completed_at: Optional[datetime]
    is_completed: bool
    last_position: int
    quiz_results: List[QuizResultResponse]

    class Config:
        """Pydantic config."""
        
        from_attributes = True 