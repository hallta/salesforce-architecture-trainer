"""
Salesforce Architecture Trainer - Flask Application

This Flask application serves educational content about Salesforce's platform architecture.
Users can browse through modules, complete quizzes, and track their progress.
Sessions are used to maintain user progress without requiring authentication.

Author: Salesforce Architecture Team
Version: 1.0.0
Date: 2023
"""

from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import json
import os
from datetime import datetime, timedelta
import argparse

# Initialize Flask application
app = Flask(__name__)

# Configure session handling
# In production, use a strong random secret key stored in environment variables
app.secret_key = os.environ.get('SECRET_KEY', 'salesforce-architecture-trainer-secret')
app.permanent_session_lifetime = timedelta(days=7)  # Keep user progress for 7 days

# Module data based on the 19 chapters from the JavaScript version
# Each module contains:
# - id: Unique identifier and sequence order
# - title: Display name of the module
# - icon: Bootstrap icon class for visual representation
# - summary: Brief description of the module content
# - content: HTML content with explanations and quiz
# - challenges: List of questions for deeper exploration
modules = [
    {
        "id": 1,
        "title": "Introduction",
        "icon": "bi-rocket-takeoff",
        "summary": "Learn about Salesforce's pioneering multitenant cloud platform and the challenges that led to its transformation.",
        "content": """
            <h2>Introduction to Salesforce Platform Transformation</h2>
            <div class="module-section">
                <p>Over two decades ago, Salesforce pioneered the first multitenant cloud platform, setting a precedent in the industry. Since then, Salesforce has significantly expanded its footprint, serving hundreds of thousands of businesses and millions of users from various industries and regions.</p>
                
                <div class="key-highlight">
                    <h5>Key Points</h5>
                    <ul>
                        <li>Salesforce pioneered the first multitenant cloud platform</li>
                        <li>The platform has expanded to serve hundreds of thousands of businesses</li>
                        <li>Salesforce enhanced its Customer360 product suite through strategic acquisitions</li>
                        <li>More than 85% of customers have transitioned to the new platform architecture</li>
                    </ul>
                </div>
            </div>
            <div class="quiz-container">
                <h4>Quick Check</h4>
                <p>What percentage of Salesforce customers have transitioned to the new platform architecture?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Around 50%</div>
                    <div class="quiz-option" data-correct="false">More than 70%</div>
                    <div class="quiz-option" data-correct="true">More than 85%</div>
                    <div class="quiz-option" data-correct="false">100%</div>
                </div>
            </div>
        """,
        "challenges": [
            "How did the emergence of public cloud providers influence Salesforce's platform transformation?",
            "What are the specific data residency and regulatory demands that drove Salesforce's platform evolution?",
            "Explain how the need for real-time data processing at scale impacted Salesforce's architectural decisions.",
            "How did advancements in AI, particularly Generative AI, shape Salesforce's platform transformation?"
        ]
    },
    {
        "id": 2,
        "title": "Architecture Overview",
        "icon": "bi-layers",
        "summary": "Get a comprehensive overview of Salesforce's platform architecture and its key principles.",
        "content": """
            <h2>Architecture Overview</h2>
            <div class="module-section">
                <p>The architectural principles of the Salesforce Platform have remained unchanged as they capture the foundation and differentiation for how Salesforce engineers features and capabilities.</p>
                
                <div class="key-highlight">
                    <h5>Foundational Architectural Principles</h5>
                    <ul>
                        <li><strong>Enterprise-Grade Trust:</strong> Trust is Salesforce's #1 value, prioritizing availability, security, and compliance</li>
                        <li><strong>Multitenant:</strong> All services and infrastructure host multiple customers</li>
                        <li><strong>Metadata-Driven:</strong> Extensible metadata enables customization</li>
                        <li><strong>API First:</strong> Rich, coherent API portfolio covering all platform functionality</li>
                        <li><strong>Open and Interoperable:</strong> Designed to integrate with any enterprise architecture</li>
                    </ul>
                </div>
            </div>
            <div class="quiz-container">
                <h4>Quick Check</h4>
                <p>Which of the following is NOT one of the foundational architectural principles of the Salesforce Platform?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Enterprise-Grade Trust</div>
                    <div class="quiz-option" data-correct="false">Metadata-Driven</div>
                    <div class="quiz-option" data-correct="true">Mobile-First Design</div>
                    <div class="quiz-option" data-correct="false">Multitenant</div>
                </div>
            </div>
        """,
        "challenges": [
            "Analyze the relationship between Salesforce's architectural principles and its business model.",
            "Create a detailed visual diagram of the platform layers, showing how they interact and depend on each other.",
            "Compare and contrast Salesforce's architectural evolution with other major cloud platforms."
        ]
    },
    {
        "id": 3,
        "title": "Hyperforce",
        "icon": "bi-cloud",
        "summary": "Explore Salesforce's infrastructure evolution to Hyperforce, operating on public cloud providers.",
        "content": """
            <h2>Hyperforce</h2>
            <div class="module-section">
                <p>Salesforce has been developing global data center infrastructure for nearly 25 years, predating many current Hyperscalers and IaaS vendors. Hyperforce, the current generation of Salesforce's infrastructure evolution, is designed to operate across multiple public cloud providers worldwide.</p>
                
                <div class="key-highlight">
                    <h5>Key Hyperforce Benefits</h5>
                    <ul>
                        <li><strong>Elastic B2C Scale:</strong> Seamlessly handle massive transaction volumes</li>
                        <li><strong>Global Data Residency:</strong> Store and process data in compliance with local regulations</li>
                        <li><strong>Enhanced Availability:</strong> Leverage cloud provider's global infrastructure</li>
                        <li><strong>Top-tier Security:</strong> Implement zero-trust security model</li>
                        <li><strong>Regulatory Compliance:</strong> Meet industry-specific requirements</li>
                    </ul>
                </div>
            </div>
            <div class="quiz-container">
                <h4>Quick Check</h4>
                <p>Which of the following is NOT one of the architectural principles of Hyperforce?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Infrastructure as Code</div>
                    <div class="quiz-option" data-correct="false">Zero-Trust Security</div>
                    <div class="quiz-option" data-correct="true">Single Cloud Provider</div>
                    <div class="quiz-option" data-correct="false">Built-in Resilience</div>
                </div>
            </div>
        """,
        "challenges": [
            "Research and create a detailed comparison of Salesforce's infrastructure approach before and after Hyperforce.",
            "Investigate how Hyperforce implements zero-trust security across different cloud providers.",
            "Explore the technical challenges of achieving consistent performance and reliability across multiple cloud providers."
        ]
    }
    # Additional modules would be defined here following the same structure
]


def get_all_modules():
    """
    Return all available training modules.
    
    This function provides access to the full module list for the index page
    and other places where the complete curriculum is needed.
    
    Returns:
        list: A list of dictionaries, each representing a module with content and metadata.
    """
    return modules


def get_module(module_id):
    """
    Retrieve a specific module by its ID.
    
    Args:
        module_id (int): The unique identifier of the module to retrieve.
        
    Returns:
        dict or None: The module dictionary if found, None otherwise.
    """
    # Simple linear search is fine for small number of modules
    for module in modules:
        if module["id"] == module_id:
            return module
    return None


def init_user_progress():
    """
    Initialize or retrieve the user's progress from the session.
    
    Creates a new progress object if none exists, otherwise retrieves the existing one.
    The progress object tracks which modules the user has completed and which
    module they're currently viewing.
    
    Returns:
        dict: The user progress dictionary containing:
            - completed_modules: List of module IDs the user has completed
            - current_module: ID of the module the user is currently viewing
            - last_visited: Timestamp of the user's last activity
    """
    if 'user_progress' not in session:
        # Create new progress object with empty completion list
        session['user_progress'] = {
            'completed_modules': [],  # List of module IDs the user has completed
            'current_module': None,   # Current module being viewed
            'last_visited': datetime.now().timestamp()  # Last activity timestamp
        }
    return session['user_progress']


def update_user_progress(module_id=None, completed=False):
    """
    Update the user's progress in the session.
    
    Updates the timestamp and optionally marks a module as completed or current.
    
    Args:
        module_id (int, optional): The ID of the module to mark as current or completed.
        completed (bool, optional): Whether to mark the module as completed.
        
    Returns:
        dict: The updated user progress dictionary.
    """
    # Get current progress or initialize if not present
    user_progress = init_user_progress()
    
    # Always update the timestamp on any progress update
    user_progress['last_visited'] = datetime.now().timestamp()
    
    if module_id:
        # Set the current module being viewed
        user_progress['current_module'] = module_id
        
        # Mark module as completed if specified and not already completed
        if completed and module_id not in user_progress['completed_modules']:
            user_progress['completed_modules'].append(module_id)
    
    # Save the updated progress back to the session
    session['user_progress'] = user_progress
    return user_progress


# ======= Route Handlers =======

@app.route('/')
def index():
    """
    Render the home page with the module grid.
    
    Displays all available modules with their completion status,
    allowing users to select which module to view.
    
    Returns:
        str: Rendered HTML for the index page.
    """
    # Initialize or get existing user progress
    user_progress = init_user_progress()
    
    # Get all available modules for display
    modules_data = get_all_modules()
    
    return render_template(
        'index.html',
        modules=modules_data,
        user_progress=user_progress
    )


@app.route('/module/<int:module_id>')
def module_view(module_id):
    """
    Render a specific module page with content and challenges.
    
    Retrieves the module content, updates the user's current module,
    and handles navigation to previous/next modules.
    
    Args:
        module_id (int): The ID of the module to display.
        
    Returns:
        str: Rendered HTML for the module page, or redirect to index if module not found.
    """
    # Try to get the requested module
    module = get_module(module_id)
    
    # Redirect to index if the module doesn't exist
    if not module:
        return redirect(url_for('index'))
    
    # Update user progress to track the current module
    user_progress = update_user_progress(module_id)
    
    # Calculate previous and next module IDs for navigation
    prev_module = module_id - 1 if module_id > 1 else None
    next_module = module_id + 1 if module_id < len(modules) else None
    
    return render_template(
        'module.html',
        module=module,
        user_progress=user_progress,
        prev_module=prev_module,
        next_module=next_module
    )


@app.route('/api/complete-module/<int:module_id>', methods=['POST'])
def complete_module(module_id):
    """
    API endpoint to mark a module as completed.
    
    Called via AJAX when a user clicks the "Mark as Completed" button.
    
    Args:
        module_id (int): The ID of the module to mark as completed.
        
    Returns:
        Response: JSON response with success status.
    """
    # Update progress to mark this module as completed
    update_user_progress(module_id, completed=True)
    
    # Return success response for the AJAX call
    return jsonify({'success': True})


@app.route('/api/reset-progress', methods=['POST'])
def reset_progress():
    """
    API endpoint to reset all user progress.
    
    Called via AJAX when a user clicks the reset button.
    Removes the user_progress object from the session completely.
    
    Returns:
        Response: JSON response with success status.
    """
    # Remove progress tracking from session if it exists
    if 'user_progress' in session:
        session.pop('user_progress')
    
    # Return success response for the AJAX call
    return jsonify({'success': True})


# ======= Application Entry Point =======

if __name__ == '__main__':
    # Set up command-line argument parsing
    parser = argparse.ArgumentParser(
        description='Run the Salesforce Architecture Trainer Flask application'
    )
    
    # Define command-line arguments
    parser.add_argument(
        '--host',
        default='127.0.0.1',
        help='Host address to bind the server to (default: 127.0.0.1)'
    )
    parser.add_argument(
        '--port',
        type=int,
        default=5001,
        help='Port to run the server on (default: 5001)'
    )
    
    # Parse the command-line arguments
    args = parser.parse_args()
    
    # Log server start information
    print(f"Starting Salesforce Architecture Trainer on {args.host}:{args.port}")
    print(f"Open your browser and navigate to http://{args.host}:{args.port}/")
    print("Press CTRL+C to stop the server")
    
    # Start the Flask development server
    app.run(
        host=args.host,
        port=args.port,
        debug=True  # Set to False in production
    ) 