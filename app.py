from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import json
import os
from datetime import datetime, timedelta
import argparse

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'salesforce-architecture-trainer-secret')
app.permanent_session_lifetime = timedelta(days=7)

# Module data based on the 19 chapters from the JavaScript version
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
    # Additional modules would be defined here
]

# Load all modules data
def get_all_modules():
    return modules

# Get a specific module by ID
def get_module(module_id):
    for module in modules:
        if module["id"] == module_id:
            return module
    return None

# Initialize user progress
def init_user_progress():
    if 'user_progress' not in session:
        session['user_progress'] = {
            'completed_modules': [],
            'current_module': None,
            'last_visited': datetime.now().timestamp()
        }
    return session['user_progress']

# Update user progress
def update_user_progress(module_id=None, completed=False):
    user_progress = init_user_progress()
    
    # Update last visited timestamp
    user_progress['last_visited'] = datetime.now().timestamp()
    
    if module_id:
        # Set current module
        user_progress['current_module'] = module_id
        
        # Mark as completed if specified
        if completed and module_id not in user_progress['completed_modules']:
            user_progress['completed_modules'].append(module_id)
    
    session['user_progress'] = user_progress
    return user_progress

# Routes
@app.route('/')
def index():
    user_progress = init_user_progress()
    modules_data = get_all_modules()
    return render_template('index.html', 
                          modules=modules_data, 
                          user_progress=user_progress)

@app.route('/module/<int:module_id>')
def module_view(module_id):
    module = get_module(module_id)
    if not module:
        return redirect(url_for('index'))
    
    user_progress = update_user_progress(module_id)
    prev_module = module_id - 1 if module_id > 1 else None
    next_module = module_id + 1 if module_id < len(modules) else None
    
    return render_template('module.html', 
                          module=module, 
                          user_progress=user_progress,
                          prev_module=prev_module,
                          next_module=next_module)

@app.route('/api/complete-module/<int:module_id>', methods=['POST'])
def complete_module(module_id):
    update_user_progress(module_id, completed=True)
    return jsonify({'success': True})

@app.route('/api/reset-progress', methods=['POST'])
def reset_progress():
    if 'user_progress' in session:
        session.pop('user_progress')
    return jsonify({'success': True})

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Run the Salesforce Architecture Trainer Flask app')
    parser.add_argument('--host', default='127.0.0.1', help='Host to run the app on')
    parser.add_argument('--port', type=int, default=5001, help='Port to run the app on')
    
    args = parser.parse_args()
    
    print(f"Starting server on {args.host}:{args.port}")
    app.run(host=args.host, port=args.port, debug=True) 