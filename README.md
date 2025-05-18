# Salesforce Architecture Trainer (Python Version)

A minimal Python Flask application that presents a series of modules about Salesforce's platform architecture. This application teaches users about Salesforce's platform transformation, architectural principles, and implementation details.

## Features

- 19 educational modules covering Salesforce's platform architecture
- User progress tracking
- Interactive quizzes to test knowledge
- Responsive design that works on desktop and mobile
- Dark/light theme toggle
- Minimal and straightforward UI

## Requirements

- Python 3.8 or higher
- Flask

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/salesforce-architecture-trainer.git
   cd salesforce-architecture-trainer
   ```

2. Create and activate a virtual environment (recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Application

1. Start the Flask development server:
   ```
   python app.py
   ```

2. Open your web browser and navigate to:
   ```
   http://127.0.0.1:5001/
   ```

### Command-line Options

You can specify a custom host and port using command-line arguments:

```
python app.py --host 0.0.0.0 --port 8080
```

Available options:
- `--host`: The host to run the app on (default: 127.0.0.1)
- `--port`: The port to run the app on (default: 5001)

## Testing

The application includes a comprehensive test suite to ensure functionality works as expected. Tests are located in the `test/` directory.

### Running Tests

To run all tests:
```
python -m pytest
```

To run a specific test file:
```
python -m pytest test/test_module_view.py
```

To run tests with verbose output:
```
python -m pytest -v
```

To run tests with code coverage report:
```
python -m pytest --cov=app
```

To generate a detailed HTML coverage report:
```
python -m pytest --cov=app --cov-report=html
```
This will create a `htmlcov` directory with an interactive HTML report showing which lines of code are covered by tests.

### Test Structure

The test suite is organized as follows:
- `test/test_module_view.py`: Tests for the module view functionality
- `test/test_api_endpoints.py`: Tests for the API endpoints (like complete-module)
- Additional test files will be added as the application grows

Each test file contains a series of test functions that validate specific functionality and edge cases, with comprehensive docstrings and comments explaining what each test does and why.

### Writing New Tests

When writing new tests:
1. Create a test file in the `test/` directory named `test_<functionality>.py`
2. Use pytest fixtures for common setup (like the test client)
3. Organize tests into classes based on the functionality being tested
4. Use descriptive test method names with the format `test_<function>_<scenario>`
5. Add detailed docstrings explaining what each test verifies
6. Use the Arrange-Act-Assert pattern for structuring tests
7. Use mocking to isolate the code being tested from its dependencies

## Project Structure

```
salesforce-architecture-trainer/
├── app.py                  # Main Flask application
├── templates/              # HTML templates
│   ├── base.html           # Base template with common structure
│   ├── index.html          # Module grid view
│   └── module.html         # Individual module view
├── static/                 # Static assets (CSS, JS, images) - will be created when needed
├── test/                   # Test directory
│   ├── test_module_view.py # Tests for module view functionality
│   └── test_api_endpoints.py # Tests for API endpoints
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

Note: The original JavaScript files (app.js, styles.css, and the root index.html) have been removed as they're no longer needed after conversion to Python Flask.

## Creating a requirements.txt File

Create a `requirements.txt` file with the following content:

```
Flask==2.3.3
```

## Customization

You can customize the modules by editing the `modules` list in `app.py`. Each module has the following structure:

```python
{
    "id": 1,
    "title": "Module Title",
    "icon": "bi-icon-name",  # Bootstrap icon class
    "summary": "Brief summary of the module",
    "content": "HTML content of the module",
    "challenges": [
        "Challenge 1 description",
        "Challenge 2 description",
        # etc.
    ]
}
```

## Deployment

This application can be deployed to any platform that supports Python web applications, such as:

- Heroku
- PythonAnywhere
- AWS Elastic Beanstalk
- Google App Engine

## Security Considerations

For production deployment:

1. Set a proper secret key in the environment variable:
   ```
   export SECRET_KEY="your-secure-random-key"
   ```

2. Configure HTTPS to secure user connections

3. Consider adding user authentication if needed

## Documentation

The project includes comprehensive documentation:

- **README.md**: Main documentation file (this file)
- **CONTRIBUTING.md**: Guidelines for contributing to the project
- **CHANGELOG.md**: Version history and changes
- **templates/README.md**: Documentation for the templates directory
- **static/README.md**: Documentation for the static assets directory

Each Python function in `app.py` is documented with docstrings.

## Version History

Current version: 1.0.0

See [CHANGELOG.md](CHANGELOG.md) for a detailed version history.

## License

This project is licensed under the MIT License - see the LICENSE file for details.