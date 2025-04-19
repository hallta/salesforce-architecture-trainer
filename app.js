// Main application logic for Salesforce Architecture Trainer
document.addEventListener('DOMContentLoaded', () => {
    // Module data based on the 19 chapters
    const modules = [
        {
            id: 1,
            title: 'Introduction',
            icon: 'bi-rocket-takeoff',
            summary: 'Learn about Salesforce\'s pioneering multitenant cloud platform and the challenges that led to its transformation.',
            content: `
                <h2>Introduction to Salesforce Platform Transformation</h2>
                <div class="module-section">
                    <p>Over two decades ago, Salesforce pioneered the first multitenant cloud platform, setting a precedent in the industry. Since then, Salesforce has significantly expanded its footprint, serving hundreds of thousands of businesses and millions of users from various industries and regions.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Points</h5>
                        <ul>
                            <li>Salesforce pioneered the first multitenant cloud platform</li>
                            <li>The platform has expanded to serve hundreds of thousands of businesses</li>
                            <li>Salesforce enhanced its Customer360 product suite through strategic acquisitions</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Market Challenges</h4>
                    <p>Recent shifts in the market and industry necessitated a reevaluation of the Salesforce Platform:</p>
                    <div class="interactive-element">
                        <h5>Explore the Challenges</h5>
                        <div id="challenge-container">
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(1)">Challenge 1</button>
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(2)">Challenge 2</button>
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(3)">Challenge 3</button>
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(4)">Challenge 4</button>
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(5)">Challenge 5</button>
                            <button class="btn btn-sm btn-outline-primary mb-2" onclick="showChallenge(6)">Challenge 6</button>
                            <div id="challenge-content" class="mt-3"></div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Platform Transformation</h4>
                    <p>In response to these challenges, Salesforce embarked on a mission four years ago to completely transform its platform from the ground up. This initiative aimed to address the aforementioned challenges and lay the groundwork for the next generation of applications and customer use cases, all while upholding application availability goals.</p>
                    <p>The launch of Agentforce at Dreamforce 2024 represents the culmination of this extensive effort, involving thousands of Salesforce Technology and Product organization team members.</p>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What percentage of Salesforce customers have transitioned to the new platform?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Around 50%</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Over 70%</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">More than 85%</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Less than 30%</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "The emergence of public cloud providers who invest heavily in infrastructure.",
                "Increasing data residency and regulatory demands across different sectors and countries.",
                "The need for handling real-time data and transactions at a much larger scale due to the rise of social and mobile technologies.",
                "Rapid advancements in machine learning and AI, particularly in Generative AI.",
                "Growing requirements for cybersecurity, system availability, performance, and resilience.",
                "A demand from customers for an integrated suite that balances a loosely coupled but coherent architecture."
            ]
        },
        {
            id: 2,
            title: 'Architecture Overview',
            icon: 'bi-diagram-3',
            summary: 'Understand the architectural principles and key transformations of the Salesforce Platform.',
            content: `
                <h2>Architecture Overview</h2>
                <div class="module-section">
                    <p>The architectural principles of the Salesforce Platform have remained unchanged as they capture the foundation and differentiation for how Salesforce engineers features and capabilities.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Architectural Principles</h5>
                        <ul>
                            <li><strong>Enterprise-Grade Trust:</strong> Trust is Salesforce's #1 value</li>
                            <li><strong>Multitenant:</strong> All services and infrastructure are built to host multiple customers</li>
                            <li><strong>Metadata-Driven:</strong> Metadata is at the heart of how multitenant services are customizable</li>
                            <li><strong>API First:</strong> The platform prioritizes a rich and coherent API portfolio</li>
                            <li><strong>Open and Interoperable:</strong> The platform can be integrated into any enterprise architecture</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Key Transformations</h4>
                    <p>The current Salesforce Platform represents the latest stage in evolution since the 2008 debut of the Force.com Platform. Recent key transformations include:</p>
                    <div class="interactive-element">
                        <h5>Explore the Transformations</h5>
                        <div class="transformation-tabs">
                            <div class="nav nav-tabs" id="transformation-tab" role="tablist">
                                <button class="nav-link active" id="hyperforce-tab" data-bs-toggle="tab" data-bs-target="#hyperforce" type="button" role="tab">Hyperforce</button>
                                <button class="nav-link" id="architecture-tab" data-bs-toggle="tab" data-bs-target="#architecture" type="button" role="tab">Architecture</button>
                                <button class="nav-link" id="data-tab" data-bs-toggle="tab" data-bs-target="#data" type="button" role="tab">Data</button>
                                <button class="nav-link" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai" type="button" role="tab">AI</button>
                            </div>
                            <div class="tab-content p-3 border border-top-0 rounded-bottom">
                                <div class="tab-pane fade show active" id="hyperforce" role="tabpanel">
                                    <p>Adoption of Hyperforce and a shift to cloud-based architectures.</p>
                                </div>
                                <div class="tab-pane fade" id="architecture" role="tabpanel">
                                    <p>Evolution from a monolithic architecture to a structure with independent services.</p>
                                </div>
                                <div class="tab-pane fade" id="data" role="tabpanel">
                                    <p>Introduction of Data Cloud and lakehouse technologies alongside traditional relational data stores.</p>
                                </div>
                                <div class="tab-pane fade" id="ai" role="tabpanel">
                                    <p>Integration of generative AI and AI Agent technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Platform Structure</h4>
                    <p>The Salesforce Platform is structured into several layers, each contributing to its comprehensive capabilities:</p>
                    <ul>
                        <li><strong>Hyperforce:</strong> The foundational infrastructure</li>
                        <li><strong>Metadata Framework:</strong> Provides a stable abstraction for apps</li>
                        <li><strong>Data:</strong> Includes multitenant relational database and lakehouse</li>
                        <li><strong>AI:</strong> Builds on the data layer with AI technologies</li>
                        <li><strong>App Platform Services:</strong> Provides tools for IT admins and developers</li>
                        <li><strong>Business Capabilities:</strong> Offers a range of capabilities for business needs</li>
                        <li><strong>APIs and API Management:</strong> Ensures all platform capabilities are accessible</li>
                        <li><strong>User and Developer Experience:</strong> Features user-friendly interfaces</li>
                        <li><strong>Integration:</strong> Integrates the platform within any enterprise architecture</li>
                        <li><strong>Apps and Industries:</strong> Provides a suite of customizable apps and solutions</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is NOT one of the architectural principles of the Salesforce Platform?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Enterprise-Grade Trust</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Metadata-Driven</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">API First</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Code-First Development</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `
        },
        {
            id: 3,
            title: 'Hyperforce',
            icon: 'bi-cloud',
            summary: 'Explore Salesforce\'s infrastructure evolution to operate across multiple public cloud providers worldwide.',
            content: `
                <h2>Hyperforce</h2>
                <div class="module-section">
                    <p>Salesforce has been developing global data center infrastructure for nearly 25 years, predating many current Hyperscalers and IaaS vendors. Hyperforce, the current generation of Salesforce's infrastructure evolution, is designed to operate across multiple public cloud providers worldwide.</p>
                    
                    <div class="key-highlight">
                        <h5>Hyperforce is designed to meet:</h5>
                        <ul>
                            <li>Elastic B2C scale requirements</li>
                            <li>Global data residency needs</li>
                            <li>Enhanced availability demands</li>
                            <li>Top-tier security requirements</li>
                            <li>Regulatory compliance across regions</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Architectural Principles</h4>
                    <p>During Salesforce's transition to Hyperforce, significant differences in services, interfaces, and compliance levels among hyperscalers were identified. To build a robust and portable foundation, these architectural principles were adopted:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore the Architectural Principles</h5>
                        <div class="accordion" id="architecturePrinciples">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        Infrastructure as Code
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        Utilizing a domain-driven architecture, this principle involves declarative coding for infrastructure, creating immutable artifacts, and automating infrastructure on-demand using standards like Kubernetes and Service Mesh.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        Zero-Trust Security
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        Implementing a zero-trust security model with comprehensive defense strategies including identity management, authentication, authorization, network isolation, least privilege security policies, and encryption of data both in transit and at rest.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        Managed Services
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        Emphasizing the use of multitenant and multi-cloud services, this principle enhances portability across different infrastructures and environments such as commercial, government, and air-gapped systems.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        Built-in Resilience
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        Mission-critical services are spread across multiple Availability Zones to ensure high availability. Data is replicated across Availability regions. Services are also labeled with availability tiering to manage service level objectives and resilience planning.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                        Fully Observable
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        Integration of all services into a standard observability platform for efficient monitoring, which includes log collection, metrics gathering, alerting, distributed tracing, and tracking of service operations like traffic volume, error rates, and resource utilization.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                        Automated Operations
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#architecturePrinciples">
                                    <div class="accordion-body">
                                        This includes automated management of infrastructure lifecycle and predictive AIOps (AI for operations) for maintaining quality of service, detecting, and addressing service degradations, and failure detection.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is a key goal of Hyperforce?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Reducing the number of available features</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Meeting global data residency requirements</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Eliminating multitenancy</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Developing proprietary infrastructure hardware</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `
        },
        {
            id: 4,
            title: 'Metadata Framework',
            icon: 'bi-code-square',
            summary: 'Learn about the foundation of customizability in Salesforce\'s multitenant architecture.',
            content: `<h2>Metadata Framework</h2><p>Detailed content about the Metadata Framework will be provided here.</p>`
        },
        {
            id: 5,
            title: 'Data',
            icon: 'bi-database',
            summary: 'Understand how Salesforce manages and processes data at scale across different storage paradigms.',
            content: `<h2>Data</h2><p>Detailed content about Data management will be provided here.</p>`
        },
        {
            id: 6,
            title: 'AI',
            icon: 'bi-cpu',
            summary: 'Explore how Salesforce integrates AI capabilities into its platform.',
            content: `<h2>AI</h2><p>Detailed content about AI capabilities will be provided here.</p>`
        },
        {
            id: 7,
            title: 'App Platform Services',
            icon: 'bi-layers',
            summary: 'Learn about the services that enable app development on the Salesforce Platform.',
            content: `<h2>App Platform Services</h2><p>Detailed content about App Platform Services will be provided here.</p>`
        },
        {
            id: 8,
            title: 'Business Capabilities',
            icon: 'bi-briefcase',
            summary: 'Discover the range of business capabilities offered by the Salesforce Platform.',
            content: `<h2>Business Capabilities</h2><p>Detailed content about Business Capabilities will be provided here.</p>`
        },
        {
            id: 9,
            title: 'User Experience',
            icon: 'bi-person-workspace',
            summary: 'Learn about Salesforce\'s approach to user experience design.',
            content: `<h2>User Experience</h2><p>Detailed content about User Experience will be provided here.</p>`
        },
        {
            id: 10,
            title: 'Developer Experience',
            icon: 'bi-code',
            summary: 'Understand the tools and frameworks for developers on the Salesforce Platform.',
            content: `<h2>Developer Experience</h2><p>Detailed content about Developer Experience will be provided here.</p>`
        },
        {
            id: 11,
            title: 'APIs and API Management',
            icon: 'bi-hdd-network',
            summary: 'Explore Salesforce\'s API-first approach and how APIs are managed.',
            content: `<h2>APIs and API Management</h2><p>Detailed content about APIs and API Management will be provided here.</p>`
        },
        {
            id: 12,
            title: 'Security',
            icon: 'bi-shield-lock',
            summary: 'Learn about Salesforce\'s approach to security and trust.',
            content: `<h2>Security</h2><p>Detailed content about Security will be provided here.</p>`
        },
        {
            id: 13,
            title: 'Availability',
            icon: 'bi-hdd-stack',
            summary: 'Understand how Salesforce ensures high availability for its services.',
            content: `<h2>Availability</h2><p>Detailed content about Availability will be provided here.</p>`
        },
        {
            id: 14,
            title: 'Extensibility',
            icon: 'bi-boxes',
            summary: 'Learn how the Salesforce Platform can be extended and customized.',
            content: `<h2>Extensibility</h2><p>Detailed content about Extensibility will be provided here.</p>`
        },
        {
            id: 15,
            title: 'Integration',
            icon: 'bi-arrow-repeat',
            summary: 'Explore how Salesforce integrates with other systems and platforms.',
            content: `<h2>Integration</h2><p>Detailed content about Integration will be provided here.</p>`
        },
        {
            id: 16,
            title: 'Ecosystem and AppExchange',
            icon: 'bi-shop',
            summary: 'Learn about Salesforce\'s partner ecosystem and the AppExchange marketplace.',
            content: `<h2>Ecosystem and AppExchange</h2><p>Detailed content about Ecosystem and AppExchange will be provided here.</p>`
        },
        {
            id: 17,
            title: 'Salesforce on Salesforce',
            icon: 'bi-tools',
            summary: 'Understand how Salesforce uses its own products internally.',
            content: `<h2>Salesforce on Salesforce</h2><p>Detailed content about Salesforce on Salesforce will be provided here.</p>`
        },
        {
            id: 18,
            title: 'Delivering Transformation at Scale',
            icon: 'bi-graph-up-arrow',
            summary: 'Learn about how Salesforce manages large-scale transformations.',
            content: `<h2>Delivering Transformation at Scale</h2><p>Detailed content about Delivering Transformation at Scale will be provided here.</p>`
        },
        {
            id: 19,
            title: 'Conclusion',
            icon: 'bi-flag',
            summary: 'Recap the key points of Salesforce\'s platform transformation journey.',
            content: `<h2>Conclusion</h2><p>Detailed content about the Conclusion will be provided here.</p>`
        }
    ];

    // DOM elements
    const modulesGrid = document.getElementById('modules-grid');
    const moduleSelection = document.getElementById('module-selection');
    const moduleContent = document.getElementById('module-content');
    const moduleContainer = document.getElementById('module-container');
    const backBtn = document.getElementById('back-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const progressBtn = document.getElementById('progress-btn');
    const progressModal = new bootstrap.Modal(document.getElementById('progress-modal'));
    const progressStats = document.getElementById('progress-stats');
    const progressList = document.getElementById('progress-list');

    // State
    let currentModuleId = null;
    let userProgress = JSON.parse(localStorage.getItem('salesforceArchitectureProgress')) || {
        completedModules: [],
        currentModule: null,
        lastVisited: Date.now()
    };

    // Check if progress is from an older session (more than 8 hours)
    const eightHoursInMs = 8 * 60 * 60 * 1000;
    if (Date.now() - userProgress.lastVisited > eightHoursInMs) {
        userProgress = {
            completedModules: [],
            currentModule: null,
            lastVisited: Date.now()
        };
        localStorage.setItem('salesforceArchitectureProgress', JSON.stringify(userProgress));
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    // Render module cards
    function renderModules() {
        modulesGrid.innerHTML = '';
        modules.forEach(module => {
            const isCompleted = userProgress.completedModules.includes(module.id);
            const isInProgress = userProgress.currentModule === module.id && !isCompleted;
            
            const moduleElement = document.createElement('div');
            moduleElement.className = 'col module-item';
            moduleElement.innerHTML = `
                <div class="card module-card ${isCompleted ? 'completed' : ''} ${isInProgress ? 'in-progress' : ''}">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div class="module-icon me-3"><i class="${module.icon}"></i></div>
                            <h5 class="card-title mb-0">${module.title}</h5>
                        </div>
                        <p class="card-text">${module.summary}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-primary badge-module">Module ${module.id}</span>
                            ${isCompleted ? '<span class="text-success"><i class="bi bi-check-circle-fill"></i> Completed</span>' : ''}
                            ${isInProgress ? '<span class="text-warning"><i class="bi bi-hourglass-split"></i> In Progress</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
            
            moduleElement.addEventListener('click', () => openModule(module.id));
            modulesGrid.appendChild(moduleElement);
        });
    }

    // Open a module
    function openModule(id) {
        currentModuleId = id;
        const module = modules.find(m => m.id === id);
        
        if (!userProgress.completedModules.includes(id)) {
            userProgress.currentModule = id;
            updateUserProgress();
        }
        
        moduleContainer.innerHTML = module.content;
        moduleSelection.classList.add('d-none');
        moduleContent.classList.remove('d-none');
        
        // Update navigation buttons
        prevBtn.disabled = id === 1;
        nextBtn.disabled = id === modules.length;
        
        // Initialize interactions for this module
        initializeModuleInteractions(module);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Initialize interactive elements for a module
    function initializeModuleInteractions(module) {
        // Challenge buttons in Introduction module
        if (module.id === 1) {
            window.showChallenge = function(index) {
                const challengeContent = document.getElementById('challenge-content');
                challengeContent.innerHTML = `<div class="alert alert-info">${module.challenges[index-1]}</div>`;
            };
        }

        // Quiz functionality
        window.checkAnswer = function(element) {
            const options = element.parentElement.querySelectorAll('.quiz-option');
            options.forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            
            const feedbackElement = element.parentElement.parentElement.querySelector('.quiz-feedback');
            feedbackElement.classList.remove('d-none', 'correct', 'incorrect');
            
            if (element.getAttribute('data-correct') === 'true') {
                feedbackElement.textContent = 'Correct! Well done.';
                feedbackElement.classList.add('correct');
                
                // Mark module as completed if not already
                if (!userProgress.completedModules.includes(module.id)) {
                    userProgress.completedModules.push(module.id);
                    updateUserProgress();
                }
            } else {
                feedbackElement.textContent = 'Not quite. Try again!';
                feedbackElement.classList.add('incorrect');
            }
            
            feedbackElement.classList.remove('d-none');
        };
    }

    // Back to modules list
    function backToModules() {
        moduleContent.classList.add('d-none');
        moduleSelection.classList.remove('d-none');
        currentModuleId = null;
    }

    // Navigate to previous module
    function goToPrevModule() {
        if (currentModuleId > 1) {
            openModule(currentModuleId - 1);
        }
    }

    // Navigate to next module
    function goToNextModule() {
        if (currentModuleId < modules.length) {
            openModule(currentModuleId + 1);
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        }
    }

    // Update user progress in localStorage
    function updateUserProgress() {
        userProgress.lastVisited = Date.now();
        localStorage.setItem('salesforceArchitectureProgress', JSON.stringify(userProgress));
        renderModules();
    }

    // Show progress modal
    function showProgress() {
        const completedCount = userProgress.completedModules.length;
        const totalModules = modules.length;
        const percentComplete = Math.round((completedCount / totalModules) * 100);
        
        progressStats.innerHTML = `
            <h6>Progress: ${completedCount}/${totalModules} modules (${percentComplete}%)</h6>
            <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar" style="width: ${percentComplete}%" 
                    aria-valuenow="${percentComplete}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `;
        
        progressList.innerHTML = '';
        modules.forEach(module => {
            const isCompleted = userProgress.completedModules.includes(module.id);
            const isInProgress = userProgress.currentModule === module.id && !isCompleted;
            
            const listItem = document.createElement('a');
            listItem.href = '#';
            listItem.className = `list-group-item list-group-item-action d-flex justify-content-between align-items-center`;
            listItem.innerHTML = `
                <span>
                    <span class="badge bg-primary badge-module me-2">Module ${module.id}</span>
                    ${module.title}
                </span>
                <span>
                    ${isCompleted ? '<span class="text-success"><i class="bi bi-check-circle-fill"></i></span>' : ''}
                    ${isInProgress ? '<span class="text-warning"><i class="bi bi-hourglass-split"></i></span>' : ''}
                </span>
            `;
            
            listItem.addEventListener('click', (e) => {
                e.preventDefault();
                progressModal.hide();
                openModule(module.id);
            });
            
            progressList.appendChild(listItem);
        });
        
        progressModal.show();
    }

    // Event listeners
    backBtn.addEventListener('click', backToModules);
    prevBtn.addEventListener('click', goToPrevModule);
    nextBtn.addEventListener('click', goToNextModule);
    themeToggle.addEventListener('click', toggleTheme);
    progressBtn.addEventListener('click', showProgress);

    // Initial render
    renderModules();
    
    // Open last viewed module if any
    if (userProgress.currentModule) {
        openModule(userProgress.currentModule);
    }
}); 