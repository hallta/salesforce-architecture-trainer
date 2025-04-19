# Contributing to Salesforce Architecture Trainer

Thank you for your interest in contributing to the Salesforce Architecture Trainer! This document provides guidelines and instructions for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/salesforce-architecture-trainer.git`
3. Create a virtual environment and install dependencies (see README.md)
4. Create a branch for your changes: `git checkout -b feature/your-feature-name`

## Development Guidelines

### Python Code

- Follow [PEP 8](https://pep8.org/) style guidelines
- Add docstrings to all functions and classes
- Keep functions small and focused on a single responsibility
- Add appropriate error handling

### HTML Templates

- Extend from base.html for consistent styling
- Follow the template inheritance structure
- Use Bootstrap 5 components and utilities
- Document template variables in comments

### JavaScript

- Use modern ES6+ JavaScript
- Add comments for complex logic
- Follow event delegation patterns for dynamic elements

## Adding New Modules

To add a new module to the application:

1. Add a new module dictionary to the `modules` list in `app.py`
2. Include all required fields: id, title, icon, summary, content, and challenges
3. Make sure the module ID is unique and sequential
4. Format the content with proper HTML structure
5. Add challenging questions that test understanding

## Testing

Before submitting your changes:

1. Test the application locally
2. Ensure all existing functionality still works
3. Verify your changes work as expected
4. Check for any errors in the Flask development server logs

## Submitting Changes

1. Commit your changes with a clear commit message
2. Push to your fork: `git push origin feature/your-feature-name`
3. Create a pull request with a detailed description of your changes

## Code of Conduct

- Be respectful and inclusive in your communications
- Provide constructive feedback on pull requests
- Help maintain a positive and collaborative environment

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

## Questions?

If you have any questions about contributing, please open an issue or contact the project maintainers. 