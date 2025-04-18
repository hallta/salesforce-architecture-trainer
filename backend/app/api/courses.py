"""
Course router for the PlatformPro application.
"""
from typing import Any, List
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.auth import get_current_active_user
from app.core.database import get_db
from app.models.course import Course, Module
from app.models.user import User
from app.schemas.course import (
    CourseCreate,
    CourseResponse,
    CourseUpdate,
    ModuleCreate,
    ModuleResponse,
    ModuleUpdate,
)

router = APIRouter()


@router.get("/", response_model=List[CourseResponse])
async def list_courses(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    List all courses.
    """
    courses = db.query(Course).offset(skip).limit(limit).all()
    return courses


@router.post("/", response_model=CourseResponse, status_code=status.HTTP_201_CREATED)
async def create_course(
    course_in: CourseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Create new course.
    """
    course = Course(
        id=str(uuid4()),
        title=course_in.title,
        description=course_in.description,
        skill_level=course_in.skill_level,
        tags=course_in.tags,
    )
    
    db.add(course)
    db.commit()
    db.refresh(course)
    
    return course


@router.get("/{course_id}", response_model=CourseResponse)
async def get_course(
    course_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get course by ID.
    """
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course not found",
        )
    return course


@router.put("/{course_id}", response_model=CourseResponse)
async def update_course(
    course_id: str,
    course_in: CourseUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update course.
    """
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course not found",
        )
    
    for field, value in course_in.dict(exclude_unset=True).items():
        setattr(course, field, value)
    
    db.commit()
    db.refresh(course)
    
    return course


@router.get("/{course_id}/modules", response_model=List[ModuleResponse])
async def list_course_modules(
    course_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    List all modules in a course.
    """
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course not found",
        )
    return course.modules


@router.post("/{course_id}/modules", response_model=ModuleResponse, status_code=status.HTTP_201_CREATED)
async def create_module(
    course_id: str,
    module_in: ModuleCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Create new module in a course.
    """
    course = db.query(Course).filter(Course.id == course_id).first()
    if not course:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Course not found",
        )
    
    module = Module(
        id=str(uuid4()),
        course_id=course_id,
        title=module_in.title,
        description=module_in.description,
        order=module_in.order,
        content=module_in.content,
        quiz_content=module_in.quiz_content,
        estimated_duration=module_in.estimated_duration,
        difficulty_level=module_in.difficulty_level,
        prerequisites=module_in.prerequisites,
    )
    
    db.add(module)
    db.commit()
    db.refresh(module)
    
    # Update course metadata
    course.update_metadata()
    db.commit()
    
    return module


@router.get("/{course_id}/modules/{module_id}", response_model=ModuleResponse)
async def get_module(
    course_id: str,
    module_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get module by ID.
    """
    module = (
        db.query(Module)
        .filter(Module.course_id == course_id, Module.id == module_id)
        .first()
    )
    if not module:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found",
        )
    return module


@router.put("/{course_id}/modules/{module_id}", response_model=ModuleResponse)
async def update_module(
    course_id: str,
    module_id: str,
    module_in: ModuleUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update module.
    """
    module = (
        db.query(Module)
        .filter(Module.course_id == course_id, Module.id == module_id)
        .first()
    )
    if not module:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found",
        )
    
    for field, value in module_in.dict(exclude_unset=True).items():
        setattr(module, field, value)
    
    db.commit()
    db.refresh(module)
    
    # Update course metadata
    module.course.update_metadata()
    db.commit()
    
    return module 