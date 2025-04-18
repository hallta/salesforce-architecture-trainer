"""
Authentication schemas for the PlatformPro application.
"""
from typing import Optional

from pydantic import BaseModel, EmailStr, constr

from app.models.user import CohortType


class Token(BaseModel):
    """Token schema."""
    
    access_token: str
    token_type: str


class TokenData(BaseModel):
    """Token data schema."""
    
    user_id: Optional[str] = None


class UserBase(BaseModel):
    """Base user schema."""
    
    email: EmailStr
    full_name: constr(min_length=1, max_length=255)
    cohort_type: CohortType
    company: Optional[str] = None
    job_title: Optional[str] = None
    bio: Optional[str] = None


class UserCreate(UserBase):
    """User creation schema."""
    
    password: constr(min_length=8)


class UserUpdate(UserBase):
    """User update schema."""
    
    password: Optional[constr(min_length=8)] = None


class UserResponse(UserBase):
    """User response schema."""
    
    id: str
    is_active: bool
    is_verified: bool

    class Config:
        """Pydantic config."""
        
        from_attributes = True 