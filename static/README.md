# Static Assets Directory

This directory contains static files served by the Flask application, organized into subdirectories by file type.

## Directory Structure

```
static/
├── css/       # Custom CSS stylesheets
├── js/        # Custom JavaScript files
└── images/    # Image files
```

## Usage

Static files are served from the `/static` URL path in the Flask application.

### In Templates

Reference static files in Jinja2 templates using the `url_for` function:

```html
<!-- CSS example -->
<link rel="stylesheet" href="{{ url_for('static', filename='css/custom.css') }}">

<!-- JavaScript example -->
<script src="{{ url_for('static', filename='js/module.js') }}"></script>

<!-- Image example -->
<img src="{{ url_for('static', filename='images/logo.png') }}" alt="Logo">
```

## Adding New Static Files

When adding new static files:

1. Place them in the appropriate subdirectory based on file type
2. Reference them in templates using the `url_for` function as shown above
3. Make sure filenames don't contain spaces or special characters

## Notes

- Most CSS and JavaScript in this application is currently served from CDNs (Bootstrap, Bootstrap Icons)
- Local static files can be added for custom functionality or when offline support is needed
- The static directory is exempt from version control for certain file types (as specified in .gitignore) 