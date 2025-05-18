"""
API Endpoints Test Suite - Salesforce Architecture Trainer

This test module focuses on testing the API endpoints in the Flask application.
It specifically tests the endpoints that handle user progress tracking,
including completing modules and resetting progress.

The tests ensure that:
1. API endpoints process requests correctly
2. User progress is properly updated in the session
3. Proper JSON responses are returned
4. Error cases are handled gracefully
"""

import pytest
import json
from flask import session
import app as flask_app
from unittest.mock import patch, MagicMock

@pytest.fixture
def client():
    """
    Create a test client for the Flask app.
    
    This fixture configures the Flask app for testing by:
    - Setting TESTING flag to True, which disables error catching during request handling
    - Setting a consistent SECRET_KEY for session management
    - Creating a test client that we can use to make requests to the app
    - Setting up an application context which is required for working with sessions
    
    Returns:
        FlaskClient: A test client for the Flask app
    """
    # Configure the Flask app for testing
    flask_app.app.config.update({
        "TESTING": True,  # Disable error catching during request handling
        "SECRET_KEY": "test_key"  # Set a consistent secret key for sessions
    })
    
    # Create a test client and application context
    with flask_app.app.test_client() as client:
        with flask_app.app.app_context():
            yield client  # Return the client to the test function

class TestCompleteModule:
    """
    Test cases for the complete_module API endpoint.
    
    These tests ensure that the complete_module endpoint correctly:
    - Accepts POST requests
    - Updates user progress to mark modules as completed
    - Returns appropriate JSON responses
    
    Each test uses mocking to isolate the endpoint from its dependencies.
    """
    
    def test_complete_module_success(self, client):
        """
        Test that the complete_module endpoint successfully marks a module as completed.
        
        This test verifies that:
        1. The endpoint accepts POST requests
        2. It calls update_user_progress with the correct module_id and completed=True
        3. It returns a JSON response with success:True
        4. The response has the correct content type and status code
        
        We mock update_user_progress to isolate the test from the actual progress tracking.
        """
        # Arrange
        # Set up the mock for update_user_progress
        with patch('app.update_user_progress') as mock_update_progress:
            # Set up the mock to return a sample progress object
            mock_update_progress.return_value = {
                "current_module": 1,
                "completed_modules": [1]
            }
            
            # Act
            # Send a POST request to the endpoint for module 1
            response = client.post('/api/complete-module/1')
            
            # Assert
            # Verify that update_user_progress was called with the correct arguments
            mock_update_progress.assert_called_once_with(1, completed=True)
            
            # Check response properties
            assert response.status_code == 200
            assert response.content_type == 'application/json'
            
            # Parse the JSON response and verify its contents
            data = json.loads(response.data)
            assert data['success'] is True
    
    def test_complete_module_invalid_method(self, client):
        """
        Test that the complete_module endpoint rejects non-POST requests.
        
        This test verifies that:
        1. The endpoint returns an appropriate error when called with GET
        2. It doesn't call update_user_progress for invalid method requests
        
        This tests the endpoint's adherence to REST principles by only
        accepting the correct HTTP method.
        """
        # Arrange
        with patch('app.update_user_progress') as mock_update_progress:
            # Act
            # Send a GET request to the endpoint (should be rejected)
            response = client.get('/api/complete-module/1')
            
            # Assert
            # Verify that update_user_progress was NOT called
            mock_update_progress.assert_not_called()
            
            # Check that the response indicates method not allowed
            assert response.status_code == 405  # Method Not Allowed
    
    def test_complete_module_with_nonexistent_module(self, client):
        """
        Test the complete_module endpoint with a module ID that doesn't exist.
        
        This test verifies that:
        1. The endpoint handles requests for non-existent module IDs
        2. It still calls update_user_progress with the provided ID
        3. It returns a success response regardless
        
        This tests the endpoint's robustness when dealing with invalid input.
        Note: The current implementation doesn't validate module IDs, so
        this test documents the current behavior rather than ideal behavior.
        """
        # Arrange
        with patch('app.update_user_progress') as mock_update_progress:
            # Configure the mock to return a progress object with no changes
            mock_update_progress.return_value = {
                "current_module": 1,
                "completed_modules": []
            }
            
            # Act
            # Send a POST request for a non-existent module (ID 999)
            response = client.post('/api/complete-module/999')
            
            # Assert
            # Verify update_user_progress was called with the non-existent ID
            mock_update_progress.assert_called_once_with(999, completed=True)
            
            # Check that a success response is still returned
            assert response.status_code == 200
            data = json.loads(response.data)
            assert data['success'] is True
    
    def test_complete_module_updates_session(self, client):
        """
        Test that the complete_module endpoint properly updates the session data.
        
        This test verifies that:
        1. The endpoint integrates correctly with the session-based progress tracking
        2. The update_user_progress function modifies the session as expected
        
        This test ensures the endpoint correctly persists progress data across requests.
        """
        # Arrange
        # Define what update_user_progress will do to the session
        def mock_update_implementation(module_id, completed=False):
            # Simulate updating the session with completed module
            if 'user_progress' not in session:
                session['user_progress'] = {
                    "current_module": module_id,
                    "completed_modules": []
                }
            
            if completed and module_id not in session['user_progress']['completed_modules']:
                session['user_progress']['completed_modules'].append(module_id)
            
            return session['user_progress']
        
        # Set up the mock with our custom implementation
        with patch('app.update_user_progress', side_effect=mock_update_implementation):
            with client.session_transaction() as sess:
                # Initialize an empty progress in the session
                sess['user_progress'] = {
                    "current_module": 1,
                    "completed_modules": []
                }
            
            # Act
            # Send the POST request to mark module 1 as completed
            response = client.post('/api/complete-module/1')
            
            # Assert
            # Verify the session was updated correctly
            with client.session_transaction() as sess:
                assert 1 in sess['user_progress']['completed_modules']
            
            # Also check the response
            assert response.status_code == 200
            data = json.loads(response.data)
            assert data['success'] is True 