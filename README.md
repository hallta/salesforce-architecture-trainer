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

## Project Structure

```
salesforce-architecture-trainer/
├── app.py                  # Main Flask application
├── templates/              # HTML templates
│   ├── base.html           # Base template with common structure
│   ├── index.html          # Module grid view
│   └── module.html         # Individual module view
├── static/                 # Static assets (CSS, JS, images)
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.