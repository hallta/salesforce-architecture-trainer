"""
Module View Test Suite - Salesforce Architecture Trainer

This test module specifically focuses on testing the module_view function in the Flask application.
The module_view function is responsible for displaying individual training modules to users
and handling navigation between modules.

The tests ensure that:
1. Valid modules can be viewed and rendered correctly
2. Invalid module requests redirect to the home page
3. User progress is updated when a module is viewed
4. Navigation between modules works correctly for all positions (first, middle, last)
"""

import pytest
from flask import url_for, session
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
    - Setting up an application context which is required for url_for and other Flask functions
    
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

class TestModuleView:
    """
    Test cases for the module_view route function.
    
    These tests ensure that the module_view function correctly:
    - Displays modules
    - Handles invalid module requests
    - Updates user progress
    - Calculates previous and next module links
    
    Each test isolates the function from its dependencies using mock objects.
    """
    
    def test_module_view_valid_module(self, client):
        """
        Test that requesting a valid module returns 200 OK and renders the correct template.
        
        This test verifies that:
        1. The module_view function returns HTTP 200 OK for valid module IDs
        2. The response contains the expected module title, showing it was rendered correctly
        3. The function properly retrieves module data from get_module
        4. The function updates user progress via update_user_progress
        
        We use patches to mock:
        - get_module: To return a predefined test module
        - update_user_progress: To return a mock progress object
        - modules: To provide context for navigation calculation
        """
        # Arrange
        # Create a mock module with a title we can check for in the response
        mock_module = {
            "id": 1,
            "title": "Test Module",
            "content": "Test content"
        }
        
        # Use patch context managers to mock the dependencies:
        # 1. get_module: Provides the mock module when the function tries to fetch module #1
        # 2. update_user_progress: Returns a fake progress object
        # 3. modules: A list containing our mock module and another for navigation
        with patch('app.get_module', return_value=mock_module), \
             patch('app.update_user_progress', return_value={"current_module": 1}), \
             patch('app.modules', [mock_module, {"id": 2}]):
            
            # Act
            # Make a GET request to the module_view endpoint for module #1
            response = client.get('/module/1')
            
            # Assert
            # Verify that:
            # 1. The response status code is 200 OK (successful request)
            # 2. The module title appears in the response data (module was rendered)
            assert response.status_code == 200
            assert b'Test Module' in response.data
    
    def test_module_view_invalid_module(self, client):
        """
        Test that requesting an invalid module redirects to index.
        
        This test verifies that:
        1. When a non-existent module ID is requested, the function redirects to the home page
        2. The get_module function returns None for a non-existent module ID
        3. The redirect is a 302 Found HTTP response
        4. The redirect location is the root URL ('/')
        
        We mock get_module to return None, simulating a request for a module that doesn't exist.
        """
        # Arrange
        # Mock get_module to return None, simulating a non-existent module
        with patch('app.get_module', return_value=None):
            
            # Act
            # Request a module with ID 999 (which doesn't exist)
            # follow_redirects=False ensures we get the redirect response, not the final page
            response = client.get('/module/999', follow_redirects=False)
            
            # Assert
            # Verify that:
            # 1. The response status code is 302 (HTTP redirect)
            # 2. The redirect location is '/' (the index page)
            assert response.status_code == 302  # HTTP redirect
            assert response.location == '/'
    
    def test_module_view_updates_user_progress(self, client):
        """
        Test that viewing a module updates the user's progress.
        
        This test verifies that:
        1. The module_view function calls update_user_progress with the correct module ID
        2. This update happens whenever a valid module is viewed
        
        We use mock objects to:
        - Return a valid module when get_module is called
        - Track calls to update_user_progress to verify it's called with the right parameters
        """
        # Arrange
        # Create a mock module that will be returned by get_module
        mock_module = {
            "id": 1,
            "title": "Test Module",
            "content": "Test content"
        }
        
        # Setup mock objects:
        # 1. get_module returns our mock module
        # 2. update_user_progress is mocked with a special mock that tracks calls
        # 3. modules is mocked to provide context for navigation
        with patch('app.get_module', return_value=mock_module), \
             patch('app.update_user_progress') as mock_update_progress, \
             patch('app.modules', [mock_module, {"id": 2}]):
            
            # Act
            # Visit module #1
            client.get('/module/1')
            
            # Assert
            # Verify that update_user_progress was called exactly once with module ID 1
            mock_update_progress.assert_called_once_with(1)
    
    def test_module_view_calculates_navigation(self, client):
        """
        Test that previous and next module IDs are correctly calculated.
        
        This test verifies that:
        1. For a module in the middle (not first or last), prev_module = current - 1
        2. For a module in the middle, next_module = current + 1
        3. The render_template function is called with the correct navigation parameters
        
        We use a middle module (ID 2) with modules before and after it to test both
        previous and next navigation links.
        """
        # Arrange
        # Create a mock module that's in the middle (ID 2)
        mock_module = {
            "id": 2,
            "title": "Middle Module",
            "content": "Test content"
        }
        
        # Use patches to control the environment:
        # 1. get_module returns our middle module
        # 2. update_user_progress returns an empty progress object
        # 3. modules is a list with modules 1, 2, and 3 to test navigation
        # 4. render_template is mocked so we can inspect its call parameters
        with patch('app.get_module', return_value=mock_module), \
             patch('app.update_user_progress', return_value={}), \
             patch('app.modules', [{"id": 1}, mock_module, {"id": 3}]), \
             patch('app.render_template') as mock_render:
            
            # Act
            # Request module #2 (the middle module)
            client.get('/module/2')
            
            # Assert
            # Verify that render_template was called with:
            # prev_module = 1 (the module before the current one)
            # next_module = 3 (the module after the current one)
            call_args = mock_render.call_args[1]
            assert call_args['prev_module'] == 1
            assert call_args['next_module'] == 3
    
    def test_module_view_first_module_navigation(self, client):
        """
        Test navigation when viewing the first module.
        
        This test verifies that:
        1. For the first module (ID 1), prev_module is None
        2. For the first module, next_module points to the second module
        3. The render_template function is called with the correct navigation parameters
        
        This tests the edge case of navigation at the beginning of the module sequence.
        """
        # Arrange
        # Create a mock for the first module (ID 1)
        mock_module = {
            "id": 1,
            "title": "First Module",
            "content": "Test content"
        }
        
        # Set up the test environment:
        # 1. get_module returns our first module
        # 2. update_user_progress returns an empty progress object
        # 3. modules is a list with modules 1 and 2 to test first-module navigation
        # 4. render_template is mocked so we can inspect its call parameters
        with patch('app.get_module', return_value=mock_module), \
             patch('app.update_user_progress', return_value={}), \
             patch('app.modules', [mock_module, {"id": 2}]), \
             patch('app.render_template') as mock_render:
            
            # Act
            # Request module #1 (the first module)
            client.get('/module/1')
            
            # Assert
            # Verify that render_template was called with:
            # prev_module = None (no previous module before the first one)
            # next_module = 2 (the module after the current one)
            call_args = mock_render.call_args[1]
            assert call_args['prev_module'] is None
            assert call_args['next_module'] == 2
    
    def test_module_view_last_module_navigation(self, client):
        """
        Test navigation when viewing the last module.
        
        This test verifies that:
        1. For the last module, prev_module points to the previous module
        2. For the last module, next_module is None
        3. The render_template function is called with the correct navigation parameters
        
        This tests the edge case of navigation at the end of the module sequence.
        """
        # Arrange
        # Create a mock for the last module (ID 2 in our test case)
        mock_module = {
            "id": 2,
            "title": "Last Module",
            "content": "Test content"
        }
        
        # Set up the test environment:
        # 1. get_module returns our last module
        # 2. update_user_progress returns an empty progress object
        # 3. modules is a list with modules 1 and 2 to test last-module navigation
        # 4. render_template is mocked so we can inspect its call parameters
        with patch('app.get_module', return_value=mock_module), \
             patch('app.update_user_progress', return_value={}), \
             patch('app.modules', [{"id": 1}, mock_module]), \
             patch('app.render_template') as mock_render:
            
            # Act
            # Request module #2 (the last module in our test setup)
            client.get('/module/2')
            
            # Assert
            # Verify that render_template was called with:
            # prev_module = 1 (the module before the current one)
            # next_module = None (no module after the last one)
            call_args = mock_render.call_args[1]
            assert call_args['prev_module'] == 1
            assert call_args['next_module'] is None 