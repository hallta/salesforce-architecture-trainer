# Templates Directory

This directory contains the HTML templates used by the Flask application. These templates use the Jinja2 templating engine.

## Files

### base.html

The base template that defines the common structure, styles, and scripts used across all pages. It includes:

- Bootstrap 5 CSS and JS
- Bootstrap Icons
- Custom CSS for styling modules, quizzes, and other components
- JavaScript for theme toggle and progress reset functionality

Other templates extend this base template.

### index.html

Displays the grid of available modules on the home page. Features:

- Cards for each module showing title, icon, and summary
- Visual indicators for module completion status
- Progress tracking for the entire course

Extends `base.html` and receives these context variables:
- `modules`: List of all module dictionaries
- `user_progress`: Dictionary containing user's progress information

### module.html

Displays the content of an individual module including:

- Module title and summary
- Content with explanatory text and diagrams
- Interactive quizzes with feedback
- Challenge questions
- Navigation to previous/next modules

Extends `base.html` and receives these context variables:
- `module`: The current module dictionary
- `user_progress`: Dictionary containing user's progress information
- `prev_module`: ID of the previous module (or None)
- `next_module`: ID of the next module (or None)

## Template Inheritance

The templates follow this inheritance pattern:

```
base.html
├── index.html
└── module.html
```

## Adding New Templates

When adding new templates, follow these guidelines:

1. Extend `base.html` using `{% extends "base.html" %}`
2. Override the `content` block using `{% block content %}{% endblock %}`
3. Add any page-specific CSS in the `extra_css` block
4. Add any page-specific JavaScript in the `extra_js` block
5. Maintain consistent styling with the existing templates 