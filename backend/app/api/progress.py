"""
Progress router for the PlatformPro application.
"""
from typing import Any, List
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.auth import get_current_active_user
from app.core.database import get_db
from app.models.course import Module
from app.models.progress import Progress, QuizResult
from app.models.user import User
from app.schemas.progress import (
    ProgressCreate,
    ProgressResponse,
    QuizResultCreate,
    QuizResultResponse,
)

router = APIRouter()


@router.get("/me", response_model=List[ProgressResponse])
async def get_user_progress(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get current user's progress across all modules.
    """
    progress = (
        db.query(Progress)
        .filter(Progress.user_id == current_user.id)
        .order_by(Progress.started_at.desc())
        .all()
    )
    return progress


@router.post("/modules/{module_id}", response_model=ProgressResponse)
async def start_module(
    module_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Start a module and create progress record.
    """
    # Check if module exists
    module = db.query(Module).filter(Module.id == module_id).first()
    if not module:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found",
        )
    
    # Check if progress already exists
    existing_progress = (
        db.query(Progress)
        .filter(
            Progress.user_id == current_user.id,
            Progress.module_id == module_id,
        )
        .first()
    )
    if existing_progress:
        return existing_progress
    
    # Create new progress
    progress = Progress(
        id=str(uuid4()),
        user_id=current_user.id,
        module_id=module_id,
    )
    
    db.add(progress)
    db.commit()
    db.refresh(progress)
    
    return progress


@router.put("/modules/{module_id}/position/{position}")
async def update_progress_position(
    module_id: str,
    position: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update user's position in a module.
    """
    progress = (
        db.query(Progress)
        .filter(
            Progress.user_id == current_user.id,
            Progress.module_id == module_id,
        )
        .first()
    )
    
    if not progress:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Progress not found",
        )
    
    progress.last_position = position
    db.commit()
    
    return {"status": "success"}


@router.post("/modules/{module_id}/complete", response_model=ProgressResponse)
async def complete_module(
    module_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Mark a module as completed.
    """
    progress = (
        db.query(Progress)
        .filter(
            Progress.user_id == current_user.id,
            Progress.module_id == module_id,
        )
        .first()
    )
    
    if not progress:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Progress not found",
        )
    
    progress.complete()
    db.commit()
    db.refresh(progress)
    
    return progress


@router.post("/modules/{module_id}/quiz", response_model=QuizResultResponse)
async def submit_quiz(
    module_id: str,
    quiz_result_in: QuizResultCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Submit quiz answers and get results.
    """
    # Get progress record
    progress = (
        db.query(Progress)
        .filter(
            Progress.user_id == current_user.id,
            Progress.module_id == module_id,
        )
        .first()
    )
    
    if not progress:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Progress not found",
        )
    
    # Get module for quiz content
    module = db.query(Module).filter(Module.id == module_id).first()
    if not module:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Module not found",
        )
    
    # Get cohort-specific quiz
    quiz = module.get_quiz_for_cohort(current_user.cohort_type)
    
    # Calculate score and generate feedback
    total_questions = len(quiz["questions"])
    correct_answers = 0
    feedback = {}
    
    for question_id, answer in quiz_result_in.answers.items():
        correct = answer == quiz["questions"][question_id]["correct_answer"]
        correct_answers += 1 if correct else 0
        feedback[question_id] = {
            "correct": correct,
            "explanation": quiz["questions"][question_id]["explanation"],
        }
    
    score = correct_answers / total_questions
    
    # Create quiz result
    quiz_result = QuizResult(
        id=str(uuid4()),
        progress_id=progress.id,
        score=score,
        answers=quiz_result_in.answers,
        feedback=feedback,
        attempt_number=len(progress.quiz_results) + 1,
    )
    
    db.add(quiz_result)
    
    # If quiz passed, mark progress as complete
    if quiz_result.passed and not progress.is_completed:
        progress.complete()
    
    db.commit()
    db.refresh(quiz_result)
    
    return quiz_result 