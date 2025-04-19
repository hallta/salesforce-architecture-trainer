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
                            <li>More than 85% of customers have transitioned to the new platform architecture</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Industry Shifts Driving Transformation</h4>
                    <p>Shifts in the market and industry in recent years necessitated a reevaluation of the Salesforce Platform:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Market Drivers</h5>
                        <div class="accordion" id="marketDrivers">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver1">
                                        Public Cloud Emergence
                                    </button>
                                </h2>
                                <div id="driver1" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>The emergence of public cloud providers who invest heavily in infrastructure created new opportunities and challenges. These hyperscalers offered global reach, elastic scalability, and specialized services that could enhance Salesforce's capabilities while requiring a fundamental rethinking of infrastructure architecture.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver2">
                                        Regulatory Requirements
                                    </button>
                                </h2>
                                <div id="driver2" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>Increasing data residency and regulatory demands across different sectors and countries required a more flexible approach to deployment. Organizations in highly regulated industries and regions needed guarantees about where their data was stored and processed, leading to new architectural challenges.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver3">
                                        Data Scale and Real-Time Processing
                                    </button>
                                </h2>
                                <div id="driver3" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>The need for handling real-time data and transactions at a much larger scale due to the rise of social and mobile technologies transformed how customers interacted with businesses. This required fundamental changes to data architecture and processing capabilities to support billions of interactions and petabytes of data.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver4">
                                        AI Advancements
                                    </button>
                                </h2>
                                <div id="driver4" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>Rapid advancements in machine learning and AI, particularly in Generative AI, opened new possibilities for enhancing business processes and customer experiences. These technologies required new architectural patterns to support the massive data and compute needs of advanced AI systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver5">
                                        Enterprise Security and Reliability
                                    </button>
                                </h2>
                                <div id="driver5" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>Growing requirements for cybersecurity, system availability, performance, and resilience required a new approach to platform architecture. As Salesforce became mission-critical for more organizations, the need for enterprise-grade security and reliability became paramount.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#driver6">
                                        Integrated Experience
                                    </button>
                                </h2>
                                <div id="driver6" class="accordion-collapse collapse" data-bs-parent="#marketDrivers">
                                    <div class="accordion-body">
                                        <p>A demand from customers for an integrated suite that balances a loosely coupled but coherent architecture required rethinking how Salesforce services connected and interoperated. Customers needed seamless experiences across products while maintaining the flexibility of independent services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>The Transformation Journey</h4>
                    <p>In response to these challenges, Salesforce embarked on a mission four years ago to completely transform its platform from the ground up. This initiative aimed to address the aforementioned challenges and lay the groundwork for the next generation of applications and customer use cases, all while upholding application availability goals.</p>
                    
                    <div class="image-container text-center my-4">
                        <img src="images/platform-transformation-timeline.png" alt="Salesforce Platform Transformation Timeline" class="img-fluid rounded shadow" />
                        <p class="image-caption">Timeline of Salesforce's platform transformation journey</p>
                    </div>
                    
                    <p>The launch of Agentforce at Dreamforce 2024 represents the culmination of this extensive effort, involving thousands of Salesforce Technology and Product organization team members. Currently, more than 85% of customers have transitioned to this new platform. The successful migration of a majority of customers, including those with the most demanding workloads, underscores the ingenuity of Salesforce engineers and reaffirms Salesforce's core values of Trust, Customer Success, and Innovation.</p>
                </div>

                <div class="module-section">
                    <h4>Key Transformation Outcomes</h4>
                    <div class="row mb-4">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <i class="bi bi-cloud-check fs-1 text-primary"></i>
                                    </div>
                                    <h5 class="card-title text-center">Hyperforce Adoption</h5>
                                    <p class="card-text">Migration to cloud-based infrastructure across multiple public cloud providers, offering enhanced global reach and scalability.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <i class="bi bi-boxes fs-1 text-primary"></i>
                                    </div>
                                    <h5 class="card-title text-center">Service Independence</h5>
                                    <p class="card-text">Evolution from monolithic architecture to independent services with clear boundaries and responsibilities.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <i class="bi bi-database-check fs-1 text-primary"></i>
                                    </div>
                                    <h5 class="card-title text-center">Data Cloud Integration</h5>
                                    <p class="card-text">Introduction of lakehouse technologies alongside traditional relational data stores for enhanced data processing at scale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <i class="bi bi-robot fs-1 text-primary"></i>
                                    </div>
                                    <h5 class="card-title text-center">AI Integration</h5>
                                    <p class="card-text">Incorporation of generative AI and AI Agent technologies throughout the platform, enabling new intelligent capabilities.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="text-center mb-3">
                                        <i class="bi bi-shield-check fs-1 text-primary"></i>
                                    </div>
                                    <h5 class="card-title text-center">Enhanced Security</h5>
                                    <p class="card-text">Implementation of zero-trust security models and advanced compliance features to meet the highest security standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Leadership Perspective</h4>
                    <div class="quote-container p-4 bg-light rounded shadow-sm my-4">
                        <i class="bi bi-quote fs-1 text-primary opacity-50"></i>
                        <blockquote class="blockquote">
                            <p>"The successful migration of a majority of our customers, including those with the most demanding workloads, underscores the ingenuity of our engineers and reaffirms Salesforce's core values of Trust, Customer Success, and Innovation."</p>
                        </blockquote>
                        <figcaption class="blockquote-footer mt-2">
                            Srini Tallapragada, President & Chief Engineering Officer of Salesforce
                        </figcaption>
                    </div>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What percentage of Salesforce customers have transitioned to the new platform architecture?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Around 50%</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">More than 70%</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">More than 85%</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">100%</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "How did the emergence of public cloud providers influence Salesforce's platform transformation? Explain the key benefits and challenges this presented.",
                "What are the specific data residency and regulatory demands that drove Salesforce's platform evolution? Research and list at least three specific regulations that impact cloud platforms.",
                "Explain how the need for real-time data processing at scale impacted Salesforce's architectural decisions. What specific technologies were introduced to address this challenge?",
                "How did advancements in AI, particularly Generative AI, shape Salesforce's platform transformation? What new capabilities do these technologies enable?",
                "Analyze how Salesforce balanced the need for security and system availability with the need for innovation and new capabilities. What architectural principles guided this balance?",
                "Create a visual timeline depicting the major milestones in Salesforce's platform transformation journey from its founding in 1999 to the launch of Agentforce in 2024.",
                "Compare and contrast Salesforce's platform before and after the transformation. Identify at least five key differences and explain their significance.",
                "Research and describe how Salesforce's platform transformation compares to similar transformations undertaken by other major enterprise software companies. What unique approaches did Salesforce take?"
            ]
        },
        {
            id: 2,
            title: 'Architecture Overview',
            icon: 'bi-layers',
            summary: 'Get a comprehensive overview of Salesforce\'s platform architecture and its key principles.',
            content: `
                <h2>Architecture Overview</h2>
                <div class="module-section">
                    <p>The architectural principles of the Salesforce Platform have remained unchanged as they capture the foundation and differentiation for how Salesforce engineers features and capabilities. These principles guide the development and evolution of the platform, ensuring it meets the needs of customers while maintaining its unique value proposition.</p>
                    
                    <div class="key-highlight">
                        <h5>Foundational Architectural Principles</h5>
                        <ul>
                            <li><strong>Enterprise-Grade Trust:</strong> Trust is Salesforce's #1 value, prioritizing availability, security, access control, compliance and security features</li>
                            <li><strong>Multitenant:</strong> All services and infrastructure host multiple customers, scaling efficiently and standardizing high availability for all customers</li>
                            <li><strong>Metadata-Driven:</strong> Extensible metadata enables customization while benefiting from ongoing platform updates</li>
                            <li><strong>API First:</strong> Rich, coherent API portfolio covering all platform functionality</li>
                            <li><strong>Open and Interoperable:</strong> Designed to integrate with any enterprise architecture, cloud or on-premises</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Platform Evolution</h4>
                    <p>The current Salesforce Platform represents the latest stage in the evolution of Salesforce's capabilities since the 2008 debut of the Force.com Platform. Recent key transformations include:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Platform Evolution</h5>
                        <div class="timeline">
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2008</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Force.com Platform</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Launch of the Force.com platform, providing a metadata-driven architecture for building custom apps on the Salesforce infrastructure.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2014</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Lightning Platform</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Introduction of Lightning Experience and component-based UI architecture, enabling more modern and responsive applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2019</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Customer 360 Platform</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Unification of various Salesforce clouds into an integrated Customer 360 platform, providing a single view of the customer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2020</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Hyperforce Launch</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Beginning of the shift to public cloud infrastructure with enhanced scalability, global reach, and security capabilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2022</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Data Cloud & Genie</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Introduction of lakehouse architecture and real-time data platform capabilities, enabling new data-intensive applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2024</div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h6 class="timeline-title">Agentforce</h6>
                                    </div>
                                    <div class="timeline-body">
                                        <p>Integration of generative AI and agent technologies throughout the platform, enabling autonomous and intelligent applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Architectural Layers</h4>
                    <p>The Salesforce Platform is structured into several layers, each contributing to its comprehensive capabilities:</p>
                    
                    <div class="image-container text-center my-4">
                        <img src="images/platform-architecture-layers.png" alt="Salesforce Platform Architecture Layers" class="img-fluid rounded shadow" />
                        <p class="image-caption">Layered architecture of the Salesforce Platform</p>
                    </div>
                    
                    <div class="interactive-element mt-4">
                        <h5>Explore Platform Layers</h5>
                        <div class="accordion" id="platformLayers">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer1">
                                        Hyperforce
                                    </button>
                                </h2>
                                <div id="layer1" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>The foundational infrastructure has evolved from first-party data centers to public cloud providers, enhanced with Salesforce technologies for secure, compliant, highly-available, and cost-efficient hosting.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer2">
                                        Metadata Framework
                                    </button>
                                </h2>
                                <div id="layer2" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Provides a stable abstraction for apps to build on, even as the technologies evolve. Includes an object-relational mapper, prescriptive order of execution, and a "core" runtime that bridges the metadata definitions with the metadata-driven runtimes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer3">
                                        Data
                                    </button>
                                </h2>
                                <div id="layer3" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Includes a multitenant relational database and a petabyte-scale lakehouse for managing Salesforce and non-Salesforce data, supporting unstructured data and content management, with advanced search and analytical processing capabilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer4">
                                        AI
                                    </button>
                                </h2>
                                <div id="layer4" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Builds on the data layer with predictive AI and newer generative AI and AI Agent technologies, providing intelligent capabilities throughout the platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer5">
                                        App Platform Services
                                    </button>
                                </h2>
                                <div id="layer5" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Provides tools for IT admins, developers, and vendors to build and customize applications, offering an opinionated abstraction to simplify common and complex tasks.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer6">
                                        Business Capabilities
                                    </button>
                                </h2>
                                <div id="layer6" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Offers a range of capabilities to meet diverse business needs, allowing developers to tailor applications as needed for specific business contexts.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer7">
                                        APIs and API Management
                                    </button>
                                </h2>
                                <div id="layer7" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Ensures all platform capabilities are accessible through well-formed APIs, facilitating service and layer interdependencies and enabling integration with external systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer8">
                                        User and Developer Experience
                                    </button>
                                </h2>
                                <div id="layer8" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Features user-friendly interfaces for end-users and a range of development tools from low-code to pro-code for application development and customization.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer9">
                                        Integration
                                    </button>
                                </h2>
                                <div id="layer9" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Integrates the platform within any enterprise architecture, enabling compatibility with Salesforce and non-Salesforce systems through data connectors and other tools.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#layer10">
                                        Apps and Industries
                                    </button>
                                </h2>
                                <div id="layer10" class="accordion-collapse collapse" data-bs-parent="#platformLayers">
                                    <div class="accordion-body">
                                        <p>Provides a suite of customizable apps and industry-specific solutions with AI agents built on the platform's integrated capabilities, leveraging the full range of lower-layer functionalities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Architectural Coherence</h4>
                    <p>These changes have expanded and refined the platform's capabilities without significant disruptions, thanks to robust abstractions that allow Salesforce engineers to advance technologies seamlessly with minimal customer disruption. The robust abstraction also continues to be key to the Salesforce Platform's value of simplifying the technical complexities of enterprise-grade software, like security, availability, and technology conventions, so app developers can focus on solving their unique challenges.</p>
                    
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0">Abstraction Benefits</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Shields developers from infrastructure complexity</li>
                                    <li class="list-group-item">Enables technology evolution without breaking changes</li>
                                    <li class="list-group-item">Provides consistent development patterns</li>
                                    <li class="list-group-item">Simplifies enterprise-grade security implementation</li>
                                    <li class="list-group-item">Ensures backward compatibility during upgrades</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0">Integration Advantages</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Each layer integrates with all layers above</li>
                                    <li class="list-group-item">Ensures consistent experiences across applications</li>
                                    <li class="list-group-item">Enables cross-cloud functionality</li>
                                    <li class="list-group-item">Supports unified data and UI patterns</li>
                                    <li class="list-group-item">Facilitates coherent AI capabilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is NOT one of the foundational architectural principles of the Salesforce Platform?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Enterprise-Grade Trust</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Metadata-Driven</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Mobile-First Design</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Multitenant</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Analyze the relationship between Salesforce's architectural principles and its business model. How do principles like multitenancy and metadata-driven architecture contribute to Salesforce's success?",
                "Create a detailed visual diagram of the platform layers, showing how they interact and depend on each other. Highlight the key components within each layer.",
                "Compare and contrast Salesforce's architectural evolution with other major cloud platforms (like AWS, Azure, or Google Cloud). What unique architectural choices has Salesforce made?",
                "Research and explain the technical challenges involved in maintaining backward compatibility while evolving a platform architecture. How has Salesforce addressed these challenges?",
                "Identify potential architectural limitations or trade-offs in Salesforce's approach. What are the implications for customers and developers?",
                "Design a presentation that explains Salesforce's architectural principles to a non-technical audience. Focus on the business benefits of each principle.",
                "Explore how Salesforce's architecture enables both standardization and customization. What specific architectural elements allow for this balance?",
                "Investigate the impact of Salesforce's API-first approach on the ecosystem of applications and integrations built around the platform. How does this compare to other platforms?",
                "Develop a timeline showing how each architectural layer has evolved over time, noting major milestones and technology shifts."
            ]
        },
        {
            id: 3,
            title: 'Hyperforce',
            icon: 'bi-cloud',
            summary: 'Explore Salesforce\'s infrastructure evolution to Hyperforce, operating on public cloud providers.',
            content: `
                <h2>Hyperforce</h2>
                <div class="module-section">
                    <p>Salesforce has been developing global data center infrastructure for nearly 25 years, predating many current Hyperscalers and IaaS vendors. Hyperforce, the current generation of Salesforce's infrastructure evolution, is designed to operate across multiple public cloud providers worldwide.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Hyperforce Benefits</h5>
                        <ul>
                            <li><strong>Elastic B2C Scale:</strong> Seamlessly handle massive transaction volumes for business-to-consumer operations</li>
                            <li><strong>Global Data Residency:</strong> Store and process data in compliance with local regulations across 20+ regions</li>
                            <li><strong>Enhanced Availability:</strong> Leverage cloud provider's global infrastructure for improved reliability</li>
                            <li><strong>Top-tier Security:</strong> Implement zero-trust security model with comprehensive protections</li>
                            <li><strong>Regulatory Compliance:</strong> Meet industry-specific and regional regulatory requirements</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Infrastructure Evolution</h4>
                    <p>Hyperforce represents a significant evolution from Salesforce's first-party data centers to a cloud-native architecture that can operate across multiple cloud providers. This transformation standardizes infrastructure across all Salesforce products, facilitating rapid integration of new acquisitions and enabling deployment in regions where Salesforce previously had no infrastructure.</p>
                    
                    <div class="image-container text-center my-4">
                        <img src="images/hyperforce-global-regions.png" alt="Hyperforce Global Regions" class="img-fluid rounded shadow" />
                        <p class="image-caption">Hyperforce availability across global regions</p>
                    </div>
                    
                    <p>Hyperforce ensures delivery of the Salesforce Platform, allowing for swift deployment of new features and applications, meeting data residency and regulatory compliance requirements in 20 regions across the world.</p>
                </div>

                <div class="module-section">
                    <h4>Architectural Principles</h4>
                    <p>During Salesforce's transition to Hyperforce, significant differences in services, interfaces, and compliance levels among hyperscalers were identified. To build a robust and portable foundation for the Salesforce Platform, these architectural principles were adopted:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Hyperforce Architectural Principles</h5>
                        <div class="accordion" id="hyperforceArchitecture">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple1">
                                        Infrastructure as Code
                                    </button>
                                </h2>
                                <div id="hfPrinciple1" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>Utilizing a domain-driven architecture, this principle involves declarative coding for infrastructure, creating immutable artifacts, and automating infrastructure on-demand using standards like Kubernetes and Service Mesh. This ensures consistent, repeatable deployment across different environments and cloud providers.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-code-square fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>Declarative infrastructure definitions</li>
                                            <li>Version-controlled infrastructure templates</li>
                                            <li>Automated provisioning and scaling</li>
                                            <li>Standardized container orchestration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple2">
                                        Zero-Trust Security
                                    </button>
                                </h2>
                                <div id="hfPrinciple2" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>Implementing a zero-trust security model with comprehensive defense strategies including identity management, authentication, authorization, network isolation, least privilege security policies, and encryption of data both in transit and at rest. This ensures that security is enforced regardless of network location or cloud provider.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-shield-lock fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>Identity-based access control</li>
                                            <li>Micro-segmentation of networks</li>
                                            <li>Continuous authentication and authorization</li>
                                            <li>Encryption everywhere (data at rest and in transit)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple3">
                                        Managed Services
                                    </button>
                                </h2>
                                <div id="hfPrinciple3" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>Emphasizing the use of multitenant and multi-cloud services, this principle enhances portability across different infrastructures and environments such as commercial, government, and air-gapped systems. Managed services provide standardized capabilities that can be deployed consistently across different cloud providers.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-gear fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>Abstraction layers over provider-specific services</li>
                                            <li>Common APIs for equivalent cloud services</li>
                                            <li>Portability across commercial and government clouds</li>
                                            <li>Consistent management interfaces</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple4">
                                        Built-in Resilience
                                    </button>
                                </h2>
                                <div id="hfPrinciple4" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>Mission-critical services are spread across multiple Availability Zones to ensure high availability. Data is replicated across Availability regions. Services are also labeled with availability tiering to manage service level objectives and resilience planning. This architectural approach ensures that the platform can withstand failures at various levels of the infrastructure.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-arrow-repeat fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>Multi-availability zone deployment</li>
                                            <li>Cross-region replication</li>
                                            <li>Automated failover mechanisms</li>
                                            <li>Tiered service level objectives</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple5">
                                        Fully Observable
                                    </button>
                                </h2>
                                <div id="hfPrinciple5" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>Integration of all services into a standard observability platform for efficient monitoring, which includes log collection, metrics gathering, alerting, distributed tracing, and tracking of service operations like traffic volume, error rates, and resource utilization. This comprehensive approach enables proactive management and rapid troubleshooting.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-graph-up fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>Centralized logging and monitoring</li>
                                            <li>Distributed tracing across services</li>
                                            <li>Real-time metrics and alerting</li>
                                            <li>End-to-end visibility of transactions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hfPrinciple6">
                                        Automated Operations
                                    </button>
                                </h2>
                                <div id="hfPrinciple6" class="accordion-collapse collapse" data-bs-parent="#hyperforceArchitecture">
                                    <div class="accordion-body">
                                        <p>This includes automated management of infrastructure lifecycle and predictive AIOps (AI for operations) for maintaining quality of service, detecting, and addressing service degradations, and failure detection. Automation enables consistent operation at scale across different cloud environments while minimizing manual intervention.</p>
                                        <div class="text-center my-3">
                                            <i class="bi bi-robot fs-1 text-primary"></i>
                                        </div>
                                        <ul class="mt-3">
                                            <li>AI-driven anomaly detection</li>
                                            <li>Automated remediation workflows</li>
                                            <li>Predictive capacity planning</li>
                                            <li>Self-healing infrastructure components</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Cloud Provider Strategy</h4>
                    <p>Hyperforce is designed to operate across multiple public cloud providers, allowing Salesforce to leverage the best capabilities of each provider while avoiding vendor lock-in. This multi-cloud approach also enables Salesforce to meet specific regional and regulatory requirements by selecting the most appropriate cloud provider for each location.</p>
                    
                    <div class="row mt-4">
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0">Multi-Cloud Benefits</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled">
                                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Avoid vendor lock-in</li>
                                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Leverage best-in-class services from each provider</li>
                                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Optimize cost across providers</li>
                                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Meet region-specific regulatory requirements</li>
                                        <li><i class="bi bi-check-circle-fill text-success me-2"></i> Enhanced global availability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0">Abstraction Approach</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled">
                                        <li><i class="bi bi-tools text-primary me-2"></i> Common service interfaces across providers</li>
                                        <li><i class="bi bi-tools text-primary me-2"></i> Standardized deployment patterns</li>
                                        <li><i class="bi bi-tools text-primary me-2"></i> Unified monitoring and management</li>
                                        <li><i class="bi bi-tools text-primary me-2"></i> Consistent security controls</li>
                                        <li><i class="bi bi-tools text-primary me-2"></i> Portable workload definitions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Global Deployment</h4>
                    <p>One of Hyperforce's key advantages is its ability to deploy Salesforce services in regions where Salesforce previously had no infrastructure. This global reach enables Salesforce to meet data residency requirements and serve customers in countries with strict data sovereignty laws.</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Hyperforce Global Deployment</h5>
                        <div class="row text-center">
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h3 class="text-primary"><i class="bi bi-globe"></i></h3>
                                        <h5 class="card-title">20+</h5>
                                        <p class="card-text">Global regions with Hyperforce availability</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h3 class="text-primary"><i class="bi bi-cloud-check"></i></h3>
                                        <h5 class="card-title">Multiple</h5>
                                        <p class="card-text">Public cloud providers supported</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h3 class="text-primary"><i class="bi bi-shield-check"></i></h3>
                                        <h5 class="card-title">Comprehensive</h5>
                                        <p class="card-text">Regional compliance certifications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="map-container text-center mt-3">
                            <p class="text-muted">Interactive map showing Hyperforce availability regions would be displayed here</p>
                        </div>
                    </div>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is NOT one of the architectural principles of Hyperforce?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Infrastructure as Code</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Zero-Trust Security</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Single Cloud Provider</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Built-in Resilience</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Research and create a detailed comparison of Salesforce's infrastructure approach before and after Hyperforce. What specific technical changes were made to enable multi-cloud deployment?",
                "Design a hypothetical migration plan for moving a complex Salesforce implementation from traditional infrastructure to Hyperforce. Include key considerations, risks, and mitigation strategies.",
                "Investigate how Hyperforce implements zero-trust security across different cloud providers. What common security patterns are employed, and how are they adapted to each provider's specific capabilities?",
                "Explore the technical challenges of achieving consistent performance and reliability across multiple cloud providers. How does Hyperforce address variations in provider capabilities?",
                "Create a visual representation of Hyperforce's global deployment, showing which cloud providers are used in different regions and explaining the rationale for these choices.",
                "Analyze the economic implications of Hyperforce for both Salesforce and its customers. How does the multi-cloud approach impact costs, pricing models, and long-term infrastructure strategy?",
                "Examine how Hyperforce supports data residency requirements in different regulatory regimes. Choose three specific countries with strict data sovereignty laws and explain how Hyperforce enables compliance.",
                "Investigate how Hyperforce's 'Fully Observable' principle is implemented technically. What monitoring tools, metrics, and practices are used to maintain visibility across a distributed multi-cloud infrastructure?",
                "Compare Hyperforce's approach to multi-cloud deployment with other enterprise SaaS platforms. What unique aspects of Salesforce's approach differentiate it from competitors?",
                "Design a dashboard for monitoring Hyperforce deployments, identifying the key metrics and indicators that would be most valuable for both operations teams and business stakeholders."
            ]
        },
        {
            id: 4,
            title: 'Enterprise-Grade Trust',
            icon: 'bi-shield-check',
            summary: 'Learn about Salesforce\'s approach to security, privacy, and trust in platform design.',
            content: `
                <h2>Enterprise-Grade Trust</h2>
                <div class="module-section">
                    <p>Trust is Salesforce's #1 value and core to how the platform is designed, built, and operated. Enterprise-Grade Trust encompasses security, compliance, privacy, transparency, and availability.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Trust Elements</h5>
                        <ul>
                            <li><strong>Security:</strong> Multi-layered approach to protect customer data</li>
                            <li><strong>Compliance:</strong> Meeting regulatory requirements across regions</li>
                            <li><strong>Privacy:</strong> Ensuring user data is handled responsibly</li>
                            <li><strong>Transparency:</strong> Providing visibility into operations and incidents</li>
                            <li><strong>Availability:</strong> Ensuring high system uptime and reliability</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Security Foundations</h4>
                    <p>Salesforce implements a comprehensive security strategy that spans all layers of the platform:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Security Layers</h5>
                        <div class="nav nav-pills mb-3" id="security-tab" role="tablist">
                            <button class="nav-link active" id="physical-tab" data-bs-toggle="tab" data-bs-target="#physical" type="button" role="tab">Physical</button>
                            <button class="nav-link" id="network-tab" data-bs-toggle="tab" data-bs-target="#network" type="button" role="tab">Network</button>
                            <button class="nav-link" id="host-tab" data-bs-toggle="tab" data-bs-target="#host" type="button" role="tab">Host</button>
                            <button class="nav-link" id="application-tab" data-bs-toggle="tab" data-bs-target="#application" type="button" role="tab">Application</button>
                            <button class="nav-link" id="data-tab" data-bs-toggle="tab" data-bs-target="#data-security" type="button" role="tab">Data</button>
                        </div>
                        <div class="tab-content p-3 border rounded">
                            <div class="tab-pane fade show active" id="physical" role="tabpanel">
                                <p>Physical security controls for data centers, including biometric access controls, 24/7 security personnel, and video surveillance.</p>
                            </div>
                            <div class="tab-pane fade" id="network" role="tabpanel">
                                <p>Network security measures like firewalls, intrusion detection, DDoS protection, and encrypted communications.</p>
                            </div>
                            <div class="tab-pane fade" id="host" role="tabpanel">
                                <p>Host-level security including hardened operating systems, malware protection, vulnerability scanning, and patch management.</p>
                            </div>
                            <div class="tab-pane fade" id="application" role="tabpanel">
                                <p>Application security features including authentication, authorization, secure coding practices, and regular penetration testing.</p>
                            </div>
                            <div class="tab-pane fade" id="data-security" role="tabpanel">
                                <p>Data security controls including encryption at rest and in transit, key management, and data loss prevention.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Compliance and Certifications</h4>
                    <p>Salesforce maintains numerous certifications and compliance with global regulations to meet customer requirements:</p>
                    <ul>
                        <li><strong>ISO 27001, 27017, 27018:</strong> Information security management standards</li>
                        <li><strong>SOC 1, SOC 2, SOC 3:</strong> Service Organization Controls reports</li>
                        <li><strong>PCI DSS:</strong> Payment Card Industry Data Security Standard</li>
                        <li><strong>GDPR:</strong> General Data Protection Regulation compliance</li>
                        <li><strong>HIPAA:</strong> Health Insurance Portability and Accountability Act</li>
                        <li><strong>FedRAMP:</strong> Federal Risk and Authorization Management Program</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Transparency and Trust</h4>
                    <p>Salesforce maintains transparency through:</p>
                    <ul>
                        <li>Real-time system status dashboards at <a href="https://status.salesforce.com" target="_blank">status.salesforce.com</a></li>
                        <li>Detailed incident reports and post-mortems</li>
                        <li>Regular security advisory communications</li>
                        <li>Public disclosure of vulnerabilities through responsible disclosure programs</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is Salesforce's #1 value?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Trust</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Innovation</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Customer Success</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Equality</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Implementing consistent security controls across different cloud providers",
                "Meeting diverse regulatory requirements across global regions",
                "Maintaining transparency while protecting sensitive security information",
                "Balancing security with usability and performance",
                "Ensuring consistent availability across all platform services"
            ]
        },
        {
            id: 5,
            title: 'Metadata Framework',
            icon: 'bi-code-square',
            summary: 'Learn about the foundation of customizability in Salesforce\'s multitenant architecture.',
            content: `
                <h2>Metadata Framework</h2>
                <div class="module-section">
                    <p>The Metadata Framework is a core foundation of the Salesforce Platform that enables customization across a multitenant architecture. This framework allows the platform to dynamically generate applications based on metadata definitions rather than hard-coded implementations.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Metadata Framework Elements</h5>
                        <ul>
                            <li><strong>Runtime Metadata:</strong> Enables dynamic rendering of user interfaces and business logic</li>
                            <li><strong>Object-Relational Mapping:</strong> Abstracts database operations through metadata definitions</li>
                            <li><strong>Extensibility:</strong> Provides mechanisms for extending standard functionality</li>
                            <li><strong>Multitenancy Support:</strong> Isolates customizations between different customers</li>
                            <li><strong>Backward Compatibility:</strong> Ensures upgrades don't break existing customizations</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Metadata-Driven Architecture</h4>
                    <p>The metadata-driven architecture is central to how Salesforce delivers customization capabilities:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Metadata Types</h5>
                        <div class="accordion" id="metadataTypes">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#metaOne">
                                        Data Model Metadata
                                    </button>
                                </h2>
                                <div id="metaOne" class="accordion-collapse collapse" data-bs-parent="#metadataTypes">
                                    <div class="accordion-body">
                                        Defines objects, fields, relationships, and validation rules that form the foundation of data storage and access. Includes standard and custom objects, picklist values, and field-level security.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#metaTwo">
                                        User Interface Metadata
                                    </button>
                                </h2>
                                <div id="metaTwo" class="accordion-collapse collapse" data-bs-parent="#metadataTypes">
                                    <div class="accordion-body">
                                        Controls the appearance and behavior of screens, including page layouts, Lightning pages, components, and themes. This metadata determines what users see and how they interact with the platform.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#metaThree">
                                        Business Logic Metadata
                                    </button>
                                </h2>
                                <div id="metaThree" class="accordion-collapse collapse" data-bs-parent="#metadataTypes">
                                    <div class="accordion-body">
                                        Defines automation, workflows, approval processes, and validation rules that enforce business processes and data integrity. Includes triggers, flows, and process builders.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#metaFour">
                                        Security Metadata
                                    </button>
                                </h2>
                                <div id="metaFour" class="accordion-collapse collapse" data-bs-parent="#metadataTypes">
                                    <div class="accordion-body">
                                        Controls access through profiles, permission sets, sharing rules, and role hierarchies. This metadata determines who can see and modify which data and functionality.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Metadata API</h4>
                    <p>Salesforce provides robust APIs for working with metadata programmatically:</p>
                    <ul>
                        <li><strong>SOAP-based Metadata API:</strong> For creating, deploying, and managing customizations</li>
                        <li><strong>Tooling API:</strong> For building development tools that interact with metadata</li>
                        <li><strong>Source Tracking:</strong> For version control of metadata changes</li>
                        <li><strong>Package Development:</strong> For creating distributable applications based on metadata</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Metadata Framework Evolution</h4>
                    <p>Recent platform enhancements to the metadata framework include:</p>
                    <ul>
                        <li>Enhanced performance for metadata operations through caching and optimization</li>
                        <li>Improved deployment capabilities for continuous integration workflows</li>
                        <li>Support for modern development practices with source-driven development</li>
                        <li>Metadata API versioning to support backward compatibility</li>
                        <li>Enhanced metadata governance tools for large enterprises</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What is the primary benefit of Salesforce's metadata-driven architecture?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Reducing database storage requirements</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Enabling customization across a multitenant environment</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Eliminating the need for developer tools</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Replacing the need for APIs</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Ensuring metadata operations scale efficiently across a large multitenant environment",
                "Maintaining backward compatibility while evolving the metadata framework",
                "Supporting complex customizations without compromising performance",
                "Managing metadata dependencies across different components and packages",
                "Providing governance capabilities for large organizations with many customizations"
            ]
        },
        {
            id: 6,
            title: 'Data',
            icon: 'bi-database',
            summary: 'Understand how Salesforce manages and processes data at scale across different storage paradigms.',
            content: `
                <h2>Data</h2>
                <div class="module-section">
                    <p>Salesforce's data architecture has evolved significantly to meet the growing demands of businesses for processing, storing, and analyzing vast amounts of data. The platform now supports multiple data paradigms to handle different types of data workloads.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Data Capabilities</h5>
                        <ul>
                            <li><strong>Relational Database:</strong> Core transactional data storage with metadata-driven schema</li>
                            <li><strong>Data Cloud:</strong> Lakehouse technology for handling unstructured and high-volume data</li>
                            <li><strong>Search & Analytics:</strong> Real-time indexing and analytical processing</li>
                            <li><strong>Content Management:</strong> Storing and managing files and documents</li>
                            <li><strong>Event-Driven Architecture:</strong> Handling real-time data streams and events</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Data Storage Paradigms</h4>
                    <p>Salesforce utilizes multiple storage technologies optimized for different use cases:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Data Storage Types</h5>
                        <div class="nav nav-tabs" id="storage-tab" role="tablist">
                            <button class="nav-link active" id="transactional-tab" data-bs-toggle="tab" data-bs-target="#transactional" type="button" role="tab">Transactional DB</button>
                            <button class="nav-link" id="datacloud-tab" data-bs-toggle="tab" data-bs-target="#datacloud" type="button" role="tab">Data Cloud</button>
                            <button class="nav-link" id="search-tab" data-bs-toggle="tab" data-bs-target="#search" type="button" role="tab">Search Index</button>
                            <button class="nav-link" id="content-tab" data-bs-toggle="tab" data-bs-target="#content" type="button" role="tab">Content Store</button>
                        </div>
                        <div class="tab-content p-3 border border-top-0 rounded-bottom">
                            <div class="tab-pane fade show active" id="transactional" role="tabpanel">
                                <p>The core relational database provides ACID-compliant transactions, schema enforcement, and referential integrity. It's optimized for record-oriented data and business operations, supporting the platform's customizable data model.</p>
                            </div>
                            <div class="tab-pane fade" id="datacloud" role="tabpanel">
                                <p>Data Cloud combines the flexibility of data lakes with the structure of data warehouses, enabling the integration and processing of massive amounts of structured, semi-structured, and unstructured data from Salesforce and external sources.</p>
                            </div>
                            <div class="tab-pane fade" id="search" role="tabpanel">
                                <p>Search infrastructure provides high-performance text-based search across all data. It maintains indexes optimized for different query patterns and supports full-text search, type-ahead suggestions, and faceted navigation.</p>
                            </div>
                            <div class="tab-pane fade" id="content" role="tabpanel">
                                <p>Content management services store and manage files, documents, and rich media assets with capabilities for versioning, metadata tagging, previewing, and access control, all integrated with the platform's security model.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Data Access & Integration</h4>
                    <p>Salesforce provides multiple mechanisms for accessing and integrating data:</p>
                    <ul>
                        <li><strong>REST and SOAP APIs:</strong> Standard interfaces for programmatic data access</li>
                        <li><strong>Bulk API:</strong> Optimized for large data volume operations</li>
                        <li><strong>Change Data Capture:</strong> Event-driven interface for real-time data changes</li>
                        <li><strong>Connector Framework:</strong> Pre-built integrations with external systems</li>
                        <li><strong>MuleSoft:</strong> Enterprise integration platform for complex data workflows</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Data Cloud Capabilities</h4>
                    <p>Data Cloud represents a major evolution in Salesforce's data architecture, offering:</p>
                    <ul>
                        <li>Unified customer profiles across all data sources</li>
                        <li>Real-time data ingestion and processing at petabyte scale</li>
                        <li>Automated data harmonization and identity resolution</li>
                        <li>Zero-copy architecture to eliminate data duplication</li>
                        <li>SQL and Python interfaces for data analysis</li>
                        <li>Direct integration with AI and analytics tools</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which data technology enables Salesforce to process unstructured data at petabyte scale?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Transactional Database</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Data Cloud</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Search Index</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Content Management System</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Managing data consistency across multiple storage paradigms",
                "Scaling to support massive data volumes while maintaining performance",
                "Ensuring data security and privacy across diverse data types",
                "Providing real-time data access and analytics capabilities",
                "Supporting various industry-specific data compliance requirements"
            ]
        },
        {
            id: 7,
            title: 'AI',
            icon: 'bi-cpu',
            summary: 'Explore how Salesforce integrates AI capabilities into its platform.',
            content: `
                <h2>AI</h2>
                <div class="module-section">
                    <p>Artificial Intelligence has become a core component of the Salesforce Platform, evolving from basic predictive capabilities to sophisticated generative AI and AI Agents that can transform how businesses operate and engage with customers.</p>
                    
                    <div class="key-highlight">
                        <h5>Key AI Capabilities</h5>
                        <ul>
                            <li><strong>Predictive AI:</strong> Forecasting future outcomes based on historical data</li>
                            <li><strong>Generative AI:</strong> Creating new content and insights from patterns in data</li>
                            <li><strong>AI Agents:</strong> Autonomous systems that can perform complex tasks</li>
                            <li><strong>Einstein Platform:</strong> Integrated AI services across Salesforce applications</li>
                            <li><strong>AI Ethics & Trust:</strong> Responsible AI development and deployment</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>AI Evolution on Salesforce</h4>
                    <p>Salesforce's AI journey has progressed through several phases:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore AI Evolution</h5>
                        <div class="timeline">
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2016</div>
                                <div class="timeline-content">
                                    <h6>Einstein AI Launch</h6>
                                    <p>Introduction of predictive analytics capabilities across Salesforce applications</p>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2019</div>
                                <div class="timeline-content">
                                    <h6>Einstein Voice & Bots</h6>
                                    <p>Natural language processing and conversational interfaces</p>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2021</div>
                                <div class="timeline-content">
                                    <h6>Einstein Recommendation Builder</h6>
                                    <p>Customizable recommendation engines for specific business needs</p>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2023</div>
                                <div class="timeline-content">
                                    <h6>Einstein GPT</h6>
                                    <p>Integration of generative AI capabilities across Salesforce Cloud offerings</p>
                                </div>
                            </div>
                            <div class="timeline-item" onclick="highlightTimelineItem(this)">
                                <div class="timeline-badge bg-primary">2024</div>
                                <div class="timeline-content">
                                    <h6>Agentforce</h6>
                                    <p>AI agents capable of autonomous decision-making and complex task execution</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>AI Architecture</h4>
                    <p>Salesforce's AI architecture is built on several foundational elements:</p>
                    <ul>
                        <li><strong>Unified Data Layer:</strong> Access to clean, connected data across systems</li>
                        <li><strong>Model Development Framework:</strong> Tools for building and training AI models</li>
                        <li><strong>Model Deployment Infrastructure:</strong> Scaling AI in production environments</li>
                        <li><strong>AI Orchestration:</strong> Coordinating multiple AI services for complex workflows</li>
                        <li><strong>Governance Framework:</strong> Controls for responsible AI deployment</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Key AI Use Cases</h4>
                    <p>AI on the Salesforce Platform enables numerous business capabilities:</p>
                    <ul>
                        <li><strong>Next Best Action:</strong> Contextual recommendations for customer engagement</li>
                        <li><strong>Automated Content Generation:</strong> Creating personalized emails, posts, and articles</li>
                        <li><strong>Intelligent Forecasting:</strong> Predictive business metrics and trends</li>
                        <li><strong>Sentiment Analysis:</strong> Understanding customer emotions from text</li>
                        <li><strong>Anomaly Detection:</strong> Identifying unusual patterns in business data</li>
                        <li><strong>Agent Assistance:</strong> AI tools that assist human agents with information and recommendations</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What is Salesforce's latest AI innovation that enables autonomous decision-making and complex task execution?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Einstein Analytics</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Einstein GPT</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Agentforce</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Einstein Voice</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Ensuring AI models have access to high-quality, relevant data",
                "Maintaining privacy and ethical standards when using customer data for AI",
                "Scaling AI capabilities to enterprise-level requirements",
                "Integrating multiple AI technologies into a cohesive system",
                "Providing transparency and explainability for AI-driven decisions"
            ]
        },
        {
            id: 8,
            title: 'Application Platform Services',
            icon: 'bi-layers',
            summary: 'Learn about the services that enable app development on the Salesforce Platform.',
            content: `
                <h2>Application Platform Services</h2>
                <div class="module-section">
                    <p>Application Platform Services provide the core capabilities that developers use to build applications on the Salesforce Platform. These services abstract away infrastructure complexity while providing powerful tools for customization.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Platform Services</h5>
                        <ul>
                            <li><strong>Configuration Services:</strong> Declarative tools for app building without code</li>
                            <li><strong>Development Services:</strong> Programmatic tools for complex business logic</li>
                            <li><strong>Integration Services:</strong> Capabilities to connect with external systems</li>
                            <li><strong>Identity Services:</strong> User authentication and authorization</li>
                            <li><strong>Monitoring Services:</strong> Visibility into application performance</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Configuration Services</h4>
                    <p>Salesforce provides powerful low-code and no-code tools that enable citizen developers to build applications through configuration:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Configuration Tools</h5>
                        <div class="accordion" id="configTools">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configOne">
                                        App Builder
                                    </button>
                                </h2>
                                <div id="configOne" class="accordion-collapse collapse" data-bs-parent="#configTools">
                                    <div class="accordion-body">
                                        Drag-and-drop interface to build custom applications with pages, components, and business logic without coding.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configTwo">
                                        Flow Builder
                                    </button>
                                </h2>
                                <div id="configTwo" class="accordion-collapse collapse" data-bs-parent="#configTools">
                                    <div class="accordion-body">
                                        Visual workflow designer for creating complex business processes and automations with branching logic, loops, and external system calls.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#configThree">
                                        Object Manager
                                    </button>
                                </h2>
                                <div id="configThree" class="accordion-collapse collapse" data-bs-parent="#configTools">
                                    <div class="accordion-body">
                                        Tool for defining custom data models, creating and modifying objects, fields, relationships, validation rules, and layouts.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Development Services</h4>
                    <p>For more complex requirements, Salesforce offers development tools and frameworks:</p>
                    <ul>
                        <li><strong>Apex:</strong> Proprietary object-oriented programming language similar to Java</li>
                        <li><strong>Lightning Web Components:</strong> Modern JavaScript framework for UI development</li>
                        <li><strong>Visualforce:</strong> MVC framework for building custom UIs</li>
                        <li><strong>APIs:</strong> SOAP, REST, Bulk, and Streaming APIs for data access</li>
                        <li><strong>DevOps Center:</strong> Tools for source control, CI/CD, and application lifecycle management</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Platform Enhancements</h4>
                    <p>Recent platform enhancements have focused on making development more efficient and enabling new capabilities:</p>
                    <ul>
                        <li>Increased API limits for integration-heavy scenarios</li>
                        <li>Function-as-a-Service (FaaS) capabilities for compute-intensive operations</li>
                        <li>Elastic computing resources for handling variable workloads</li>
                        <li>Event-driven architecture for real-time applications</li>
                        <li>Enhanced development environments for better local development experiences</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is NOT a configuration tool on the Salesforce Platform?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Flow Builder</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">App Builder</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Object Manager</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Code Compiler</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Balancing declarative (clicks) and programmatic (code) development approaches",
                "Providing enterprise-grade development tools while maintaining ease of use",
                "Supporting modern development practices like DevOps and CI/CD",
                "Evolving platform capabilities while maintaining backward compatibility",
                "Scaling development services for organizations of all sizes"
            ]
        },
        {
            id: 9,
            title: 'Automation',
            icon: 'bi-gear-wide-connected',
            summary: 'Discover how Salesforce enables business process automation and workflow capabilities.',
            content: `
                <h2>Automation</h2>
                <div class="module-section">
                    <p>Automation is a cornerstone of the Salesforce Platform, enabling organizations to streamline processes, reduce manual tasks, and create consistent experiences. Salesforce's automation capabilities have evolved from simple workflow rules to sophisticated orchestration tools.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Automation Capabilities</h5>
                        <ul>
                            <li><strong>Process Builder:</strong> Point-and-click tool for creating multi-step processes</li>
                            <li><strong>Flow Builder:</strong> Powerful tool for building complex business processes</li>
                            <li><strong>Workflow Rules:</strong> Automated field updates, emails, and tasks</li>
                            <li><strong>Approval Processes:</strong> Automated review and approval of records</li>
                            <li><strong>Einstein Automation:</strong> AI-powered automation with intelligent decision-making</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Flow Evolution</h4>
                    <p>Flow has become the central automation tool in Salesforce, bringing together various automation capabilities:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Flow Types</h5>
                        <div class="row flow-types">
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'screen')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-display me-2"></i>Screen Flows</h6>
                                        <p class="card-text">Interactive, wizard-like experiences that guide users through a business process with screens, logic, and actions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'record')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-database me-2"></i>Record-Triggered Flows</h6>
                                        <p class="card-text">Automated processes that start when records are created, updated, or deleted. Key features include:</p>
                                        <ul>
                                            <li>Before-save and after-save execution options</li>
                                            <li>Record-level filtering conditions</li>
                                            <li>Access to previous and current record values</li>
                                            <li>Efficient processing of related records</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'scheduled')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-clock me-2"></i>Scheduled Flows</h6>
                                        <p class="card-text">Batch processes that run at specified times to perform operations on multiple records.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'platform')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-code-slash me-2"></i>Platform Event Flows</h6>
                                        <p class="card-text">Event-driven processes that respond to platform events for real-time integrations.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'autolaunched')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-lightning me-2"></i>Autolaunched Flows</h6>
                                        <p class="card-text">Headless flows that run in the background when called from other automations, code, or APIs.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100 flow-card" onclick="selectFlowType(this, 'orchestrator')">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="bi bi-diagram-3 me-2"></i>Flow Orchestrator</h6>
                                        <p class="card-text">Multi-step, multi-user workflows that orchestrate complex business processes across teams.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="flow-details" class="mt-3 d-none">
                            <div class="alert alert-info">Select a flow type to see more details</div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Integration with Other Capabilities</h4>
                    <p>Salesforce automation integrates deeply with other platform capabilities:</p>
                    <ul>
                        <li><strong>Einstein AI:</strong> Adding intelligence to automated processes</li>
                        <li><strong>MuleSoft Automation:</strong> Extending automation across systems</li>
                        <li><strong>Slack Workflow Builder:</strong> Creating automations within collaboration tools</li>
                        <li><strong>Industry Solutions:</strong> Pre-built automations for specific industry needs</li>
                        <li><strong>Customer360:</strong> Cross-cloud automations spanning multiple applications</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Automation Best Practices</h4>
                    <p>Salesforce recommends these best practices for automation:</p>
                    <ul>
                        <li>Use declarative tools (Flow) before code (Apex) whenever possible</li>
                        <li>Consolidate automation to reduce complexity and maintenance</li>
                        <li>Consider transaction limits and bulkification for large data volumes</li>
                        <li>Implement proper error handling and notifications</li>
                        <li>Use debugging tools to test and troubleshoot automation</li>
                        <li>Implement a governance model for enterprise-wide automation</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which automation tool has become the central automation capability in Salesforce?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Process Builder</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Flow</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Workflow Rules</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Approval Processes</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Balancing automation complexity with maintainability",
                "Managing performance impact of automations on large volumes of data",
                "Coordinating multiple automation tools and approaches",
                "Training users and administrators on automation best practices",
                "Migrating from legacy automation tools to modern Flow-based solutions"
            ]
        },
        {
            id: 10,
            title: 'User Experiences',
            icon: 'bi-person-workspace',
            summary: 'Learn about Salesforce\'s approach to user experience design across multiple interfaces.',
            content: `
                <h2>User Experiences</h2>
                <div class="module-section">
                    <p>Salesforce has evolved its user experience design to meet the diverse needs of different users across various interfaces. The platform provides consistent, accessible, and personalized experiences that adapt to different devices and user preferences.</p>
                    
                    <div class="key-highlight">
                        <h5>Key User Experience Elements</h5>
                        <ul>
                            <li><strong>Lightning Experience:</strong> Modern, responsive interface for desktop users</li>
                            <li><strong>Mobile Experience:</strong> Native mobile apps optimized for on-the-go productivity</li>
                            <li><strong>Experience Cloud:</strong> Branded external-facing portals and communities</li>
                            <li><strong>Slack-First UI:</strong> Collaborative interfaces integrated with workflow</li>
                            <li><strong>Accessibility:</strong> Inclusive design for users of all abilities</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Interface Types</h4>
                    <p>Salesforce supports multiple interface types to serve different user needs:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Interface Types</h5>
                        <div class="carousel-container">
                            <div id="interfaceCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#interfaceCarousel" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#interfaceCarousel" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#interfaceCarousel" data-bs-slide-to="2"></button>
                                    <button type="button" data-bs-target="#interfaceCarousel" data-bs-slide-to="3"></button>
                                    <button type="button" data-bs-target="#interfaceCarousel" data-bs-slide-to="4"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="carousel-content">
                                            <h5><i class="bi bi-laptop me-2"></i>Lightning Experience</h5>
                                            <p>The primary desktop interface for Salesforce users, featuring a component-based architecture that enables personalization and customization. Lightning Experience provides a modern, intuitive interface with features like split view, utility bar, and dynamic page layouts.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-content">
                                            <h5><i class="bi bi-phone me-2"></i>Mobile Experience</h5>
                                            <p>Native mobile apps for iOS and Android that provide access to Salesforce data and functionality optimized for mobile devices. Features offline capabilities, push notifications, and mobile-specific UI patterns designed for touch interfaces and smaller screens.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-content">
                                            <h5><i class="bi bi-people me-2"></i>Experience Cloud</h5>
                                            <p>Platform for creating branded, external-facing websites, portals, and communities for customers, partners, and employees. Supports custom themes, templates, and components with authentication and personalization based on user profiles.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-content">
                                            <h5><i class="bi bi-chat-dots me-2"></i>Slack-First Interface</h5>
                                            <p>Collaborative experience that brings Salesforce data and functionality directly into Slack channels and workflows. Enables users to view records, take actions, and receive notifications within their collaboration environment.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="carousel-content">
                                            <h5><i class="bi bi-command me-2"></i>Einstein Copilot</h5>
                                            <p>AI-powered conversational interface that allows users to interact with Salesforce using natural language. Users can ask questions, give commands, and receive contextualized responses and recommendations.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#interfaceCarousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#interfaceCarousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Lightning Component Framework</h4>
                    <p>The Lightning Component Framework provides the foundation for building modern user interfaces:</p>
                    <ul>
                        <li><strong>Lightning Web Components:</strong> Modern JavaScript framework based on web standards</li>
                        <li><strong>Lightning Design System:</strong> CSS framework ensuring consistent look and feel</li>
                        <li><strong>Component Libraries:</strong> Reusable UI elements for rapid application development</li>
                        <li><strong>App Builder:</strong> Drag-and-drop interface for assembling components into pages</li>
                        <li><strong>Dynamic Interactions:</strong> Component communication and reactive data binding</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Accessibility and Inclusivity</h4>
                    <p>Salesforce is committed to creating accessible user experiences:</p>
                    <ul>
                        <li>Compliance with WCAG 2.1 AA standards</li>
                        <li>Keyboard navigation and screen reader support</li>
                        <li>Color contrast and text legibility optimizations</li>
                        <li>Accessibility testing built into the development process</li>
                        <li>Accessibility audit tools for custom development</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which platform allows organizations to create branded external-facing websites and portals?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Lightning Experience</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Slack-First Interface</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Experience Cloud</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Einstein Copilot</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Supporting multiple interface types while maintaining consistency",
                "Balancing rich functionality with simplicity and ease of use",
                "Ensuring interfaces are accessible to users with different abilities",
                "Optimizing performance across various devices and network conditions",
                "Personalizing experiences based on user roles and preferences"
            ]
        },
        {
            id: 11,
            title: 'Developer Experience',
            icon: 'bi-code',
            summary: 'Understand the tools and frameworks for developers on the Salesforce Platform.',
            content: `
                <h2>Developer Experience</h2>
                <div class="module-section">
                    <p>The Salesforce Platform provides a comprehensive set of tools and frameworks that enable developers to build applications efficiently. Modern developer experience focuses on productivity, flexibility, and collaboration across diverse development teams.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Developer Experience Elements</h5>
                        <ul>
                            <li><strong>Development Tools:</strong> IDE extensions, CLI, and low-code builders</li>
                            <li><strong>Frameworks:</strong> Lightning Web Components and Apex</li>
                            <li><strong>DevOps:</strong> Source control, CI/CD, and deployment tools</li>
                            <li><strong>Package Development:</strong> Modular development with managed packages</li>
                            <li><strong>Testing:</strong> Automated testing frameworks for code quality</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Development Environments</h4>
                    <p>Salesforce provides multiple development environment options:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Development Environments</h5>
                        <div class="nav nav-tabs" id="dev-env-tab" role="tablist">
                            <button class="nav-link active" id="devspaces-tab" data-bs-toggle="tab" data-bs-target="#devspaces" type="button" role="tab">Developer Spaces</button>
                            <button class="nav-link" id="scratch-tab" data-bs-toggle="tab" data-bs-target="#scratch" type="button" role="tab">Scratch Orgs</button>
                            <button class="nav-link" id="sandbox-tab" data-bs-toggle="tab" data-bs-target="#sandbox" type="button" role="tab">Sandboxes</button>
                            <button class="nav-link" id="local-tab" data-bs-toggle="tab" data-bs-target="#local" type="button" role="tab">Local Development</button>
                        </div>
                        <div class="tab-content p-3 border border-top-0 rounded-bottom">
                            <div class="tab-pane fade show active" id="devspaces" role="tabpanel">
                                <p>Cloud-based development environments with pre-configured tools, eliminating local setup and ensuring consistent experiences across teams.</p>
                            </div>
                            <div class="tab-pane fade" id="scratch" role="tabpanel">
                                <p>Source-driven, ephemeral environments for development and automated testing, ideal for modern development workflows.</p>
                            </div>
                            <div class="tab-pane fade" id="sandbox" role="tabpanel">
                                <p>Copies of production environments at different scales (Developer, Developer Pro, Partial, Full) for development and testing.</p>
                            </div>
                            <div class="tab-pane fade" id="local" role="tabpanel">
                                <p>Local development capabilities with VS Code and Salesforce Extensions, enabling offline development and standard developer workflows.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Development Frameworks</h4>
                    <p>Salesforce provides multiple frameworks for application development:</p>
                    <ul>
                        <li><strong>Lightning Web Components:</strong> Modern, standards-based JavaScript framework for UI development</li>
                        <li><strong>Apex:</strong> Strongly-typed, object-oriented server-side language similar to Java</li>
                        <li><strong>Visualforce:</strong> MVC framework for building traditional web UIs</li>
                        <li><strong>SOQL and SOSL:</strong> Specialized query languages for data retrieval</li>
                        <li><strong>Flow:</strong> Low-code automation framework with programmatic extensibility</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>DevOps and CI/CD</h4>
                    <p>Modern application development on Salesforce embraces DevOps practices:</p>
                    <ul>
                        <li><strong>Salesforce CLI:</strong> Command-line interface for automating development tasks</li>
                        <li><strong>Source Control:</strong> Git integration for version control and collaboration</li>
                        <li><strong>CI/CD:</strong> Automated testing, validation, and deployment pipelines</li>
                        <li><strong>DevOps Center:</strong> UI-based tool for managing the release process</li>
                        <li><strong>Change Sets:</strong> Declarative tool for moving changes between environments</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is Salesforce's modern JavaScript framework for UI development?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Aura Components</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Lightning Web Components</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Visualforce</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">React Components</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Balancing the needs of professional developers and citizen developers",
                "Supporting modern development practices while maintaining platform integrity",
                "Managing dependencies and package versioning across organizations",
                "Enabling local development for cloud-native applications",
                "Integrating with diverse toolchains and development environments"
            ]
        },
        {
            id: 12,
            title: 'Application Suite',
            icon: 'bi-grid-3x3-gap',
            summary: 'Explore Salesforce\'s application suite and how it\'s built on the platform architecture.',
            content: `<h2>Application Suite</h2><p>Detailed content about Application Suite will be provided here.</p>`,
            challenges: [
                "Maintaining backward compatibility while introducing significant architectural changes",
                "Migrating thousands of customers with minimal disruption",
                "Integrating acquisitions into a coherent platform architecture",
                "Balancing innovation speed with enterprise-grade reliability",
                "Meeting diverse needs across different industries and customer sizes"
            ]
        },
        {
            id: 13,
            title: 'Industry-Specific Solutions',
            icon: 'bi-building',
            summary: 'Learn about Salesforce\'s vertical solutions for specific industries and their architectural foundations.',
            content: `
                <h2>Industry-Specific Solutions</h2>
                <div class="module-section">
                    <p>Salesforce has evolved from a horizontal CRM platform to offering deep vertical solutions for specific industries. These industry clouds extend the standard platform with specialized data models, business processes, and AI capabilities tailored to industry requirements.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Industry Solutions</h5>
                        <ul>
                            <li><strong>Financial Services Cloud:</strong> Banking, insurance, and wealth management solutions</li>
                            <li><strong>Health Cloud:</strong> Patient care and healthcare relationship management</li>
                            <li><strong>Manufacturing Cloud:</strong> Sales agreements, account forecasting, and revenue visibility</li>
                            <li><strong>Consumer Goods Cloud:</strong> Retail execution and trade promotion management</li>
                            <li><strong>Education Cloud:</strong> Student success and institution management</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Industry Cloud Approach</h4>
                    <p>Salesforce's industry solutions are built with these architectural principles:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Industry Cloud Architecture</h5>
                        <div class="accordion" id="industryArchitecture">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#indArch1">
                                        Core Platform Extension
                                    </button>
                                </h2>
                                <div id="indArch1" class="accordion-collapse collapse" data-bs-parent="#industryArchitecture">
                                    <div class="accordion-body">
                                        <p>Industry clouds extend the core platform with specialized objects, fields, and relationships that model industry-specific entities and processes. This approach ensures that industry solutions benefit from all platform capabilities like security, analytics, and mobility.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#indArch2">
                                        Pre-Built Business Processes
                                    </button>
                                </h2>
                                <div id="indArch2" class="accordion-collapse collapse" data-bs-parent="#industryArchitecture">
                                    <div class="accordion-body">
                                        <p>Industry solutions include pre-built workflows, approval processes, and automated business processes that reflect industry best practices. These processes can be customized to match specific organizational requirements while maintaining compliance with industry standards.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#indArch3">
                                        Industry AppExchange Ecosystem
                                    </button>
                                </h2>
                                <div id="indArch3" class="accordion-collapse collapse" data-bs-parent="#industryArchitecture">
                                    <div class="accordion-body">
                                        <p>Each industry cloud has a dedicated ecosystem of partner-built applications and components that extend the core functionality. These pre-built integrations allow organizations to quickly implement specialized capabilities like document generation, specialized calculations, or third-party data integrations.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#indArch4">
                                        Regulatory Compliance
                                    </button>
                                </h2>
                                <div id="indArch4" class="accordion-collapse collapse" data-bs-parent="#industryArchitecture">
                                    <div class="accordion-body">
                                        <p>Industry clouds incorporate compliance frameworks and data protection capabilities specific to industry regulations like HIPAA, GDPR, and FINRA. These features help organizations maintain regulatory compliance while still benefiting from cloud technology innovations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Industry-Specific AI</h4>
                    <p>Salesforce has developed specialized AI models for industry-specific use cases:</p>
                    <ul>
                        <li><strong>Financial Services:</strong> Intelligent needs-based referrals and next best actions</li>
                        <li><strong>Healthcare:</strong> Care gap prediction and social determinants of health insights</li>
                        <li><strong>Manufacturing:</strong> Demand forecasting and supply chain optimization</li>
                        <li><strong>Retail:</strong> Personalized shopping experiences and inventory optimization</li>
                        <li><strong>Public Sector:</strong> Constituent service recommendation and program eligibility</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Architectural Considerations</h4>
                    <p>When implementing industry solutions, organizations should consider:</p>
                    <ul>
                        <li><strong>Data Model Extensions:</strong> Balancing standard and custom objects</li>
                        <li><strong>Integration with Legacy Systems:</strong> Connecting with industry-specific systems</li>
                        <li><strong>Regulatory Guardrails:</strong> Ensuring compliance with industry regulations</li>
                        <li><strong>Specialized User Experience:</strong> Tailoring interfaces for industry roles</li>
                        <li><strong>Industry Data Standards:</strong> Supporting standard data formats and protocols</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which of the following is a key benefit of using Salesforce Industry Clouds?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Completely replacing the core Salesforce platform</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Pre-built industry-specific data models and processes</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Elimination of the need for any customization</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Lower security requirements for regulated industries</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Adapting to diverse regulatory requirements across global regions",
                "Balancing industry standardization with organization-specific customizations",
                "Integrating with specialized legacy systems common in established industries",
                "Supporting industry-specific business processes while maintaining platform benefits",
                "Keeping pace with evolving industry regulations and standards"
            ]
        },
        {
            id: 14,
            title: 'Analytics',
            icon: 'bi-bar-chart',
            summary: 'Explore Salesforce\'s analytics capabilities from basic reports to advanced AI-powered insights.',
            content: `
                <h2>Analytics</h2>
                <div class="module-section">
                    <p>Analytics is a core capability of the Salesforce Platform, enabling organizations to gain insights from their data to drive better business decisions. Salesforce's analytics offerings range from simple reports and dashboards to sophisticated AI-powered predictive analytics.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Analytics Capabilities</h5>
                        <ul>
                            <li><strong>Reports and Dashboards:</strong> Operational reporting on transactional data</li>
                            <li><strong>Tableau CRM:</strong> Advanced analytics and data visualization</li>
                            <li><strong>Einstein Analytics:</strong> AI-powered insights and predictions</li>
                            <li><strong>Data Cloud:</strong> Unified analytics across all data sources</li>
                            <li><strong>Embedded Analytics:</strong> Insights integrated into business processes</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Analytics Spectrum</h4>
                    <p>Salesforce provides a spectrum of analytics capabilities for different needs:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Analytics Types</h5>
                        <div class="nav nav-pills mb-3" id="analytics-tab" role="tablist">
                            <button class="nav-link active" id="descriptive-tab" data-bs-toggle="tab" data-bs-target="#descriptive" type="button" role="tab">Descriptive</button>
                            <button class="nav-link" id="diagnostic-tab" data-bs-toggle="tab" data-bs-target="#diagnostic" type="button" role="tab">Diagnostic</button>
                            <button class="nav-link" id="predictive-tab" data-bs-toggle="tab" data-bs-target="#predictive" type="button" role="tab">Predictive</button>
                            <button class="nav-link" id="prescriptive-tab" data-bs-toggle="tab" data-bs-target="#prescriptive" type="button" role="tab">Prescriptive</button>
                        </div>
                        <div class="tab-content p-3 border rounded">
                            <div class="tab-pane fade show active" id="descriptive" role="tabpanel">
                                <p><strong>Descriptive Analytics</strong> shows what has happened through reports, dashboards, and visualizations. Salesforce's Reports and Dashboards provide operational visibility into business data, while Tableau enables more advanced visualizations and interactive analysis.</p>
                            </div>
                            <div class="tab-pane fade" id="diagnostic" role="tabpanel">
                                <p><strong>Diagnostic Analytics</strong> helps understand why something happened through drill-down analysis and correlation discovery. Tableau CRM enables users to explore relationships between different metrics and dimensions to uncover root causes of business trends.</p>
                            </div>
                            <div class="tab-pane fade" id="predictive" role="tabpanel">
                                <p><strong>Predictive Analytics</strong> forecasts what might happen through machine learning models. Einstein Discovery automatically analyzes data patterns to predict outcomes like churn risk, deal close probability, or service escalations.</p>
                            </div>
                            <div class="tab-pane fade" id="prescriptive" role="tabpanel">
                                <p><strong>Prescriptive Analytics</strong> recommends actions to optimize outcomes. Einstein Next Best Action combines predictive models with business rules to suggest specific actions users should take to achieve desired results.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Analytics Architecture</h4>
                    <p>Salesforce's analytics architecture includes several key components:</p>
                    <ul>
                        <li><strong>Data Preparation:</strong> Tools for cleaning, transforming, and combining data</li>
                        <li><strong>Data Storage:</strong> Optimized storage for analytical processing</li>
                        <li><strong>Processing Engine:</strong> High-performance query and calculation capabilities</li>
                        <li><strong>Visualization Layer:</strong> Interactive charts, dashboards, and stories</li>
                        <li><strong>AI/ML Services:</strong> Automated model building and scoring</li>
                        <li><strong>Embedding Framework:</strong> Capabilities to integrate analytics into applications</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Data Cloud Analytics</h4>
                    <p>Data Cloud represents the evolution of Salesforce analytics, providing:</p>
                    <ul>
                        <li>Unified data foundation across Salesforce and external sources</li>
                        <li>Real-time analytics capabilities for streaming data</li>
                        <li>Advanced data modeling with SQL and Python</li>
                        <li>Direct integration with AI models and applications</li>
                        <li>Scaled performance for massive datasets</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which type of analytics helps forecast what might happen in the future?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Descriptive Analytics</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Diagnostic Analytics</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Predictive Analytics</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Prescriptive Analytics</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Integrating data from multiple sources while maintaining data quality",
                "Scaling analytics capabilities to handle growing data volumes",
                "Making advanced analytics accessible to business users",
                "Ensuring analytical insights lead to actionable outcomes",
                "Maintaining performance while processing complex analytical queries"
            ]
        },
        {
            id: 15,
            title: 'Integration',
            icon: 'bi-arrows-angle-contract',
            summary: 'Learn about Salesforce\'s integration capabilities for connecting with other systems and data sources.',
            content: `<h2>Integration</h2><p>Detailed content about Integration will be provided here.</p>`,
            challenges: [
                "Managing the growing complexity of integration scenarios",
                "Ensuring data consistency across connected systems",
                "Balancing real-time integration needs with system performance",
                "Maintaining security across integration points",
                "Governing the proliferation of APIs and integrations"
            ]
        },
        {
            id: 16,
            title: 'Ecosystem And AppExchange',
            icon: 'bi-plugin',
            summary: 'Explore Salesforce\'s partner ecosystem and marketplace for extensions and applications.',
            content: `
                <h2>Ecosystem And AppExchange</h2>
                <div class="module-section">
                    <p>The Salesforce ecosystem is a critical component of the platform's success, with a vast network of partners, developers, and customers who create and share solutions. At the center of this ecosystem is AppExchange, the world's leading enterprise cloud marketplace, providing a platform for discovering, evaluating, and installing pre-built applications and components.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Ecosystem Elements</h5>
                        <ul>
                            <li><strong>AppExchange Marketplace:</strong> Over 7,000 solutions across industries and use cases</li>
                            <li><strong>Partner Program:</strong> ISVs, consulting partners, and system integrators</li>
                            <li><strong>Developer Community:</strong> Over 10 million members building on the platform</li>
                            <li><strong>Trailhead:</strong> Learning platform for Salesforce skills development</li>
                            <li><strong>Open Source Community:</strong> Sharing of tools, frameworks, and best practices</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>AppExchange Solutions</h4>
                    <p>AppExchange offers various solution types to extend the Salesforce Platform:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore AppExchange Solution Types</h5>
                        <div class="nav nav-tabs" id="app-exchange-tab" role="tablist">
                            <button class="nav-link active" id="apps-tab" data-bs-toggle="tab" data-bs-target="#apps" type="button" role="tab">Apps</button>
                            <button class="nav-link" id="components-tab" data-bs-toggle="tab" data-bs-target="#components" type="button" role="tab">Components</button>
                            <button class="nav-link" id="bolt-tab" data-bs-toggle="tab" data-bs-target="#bolt" type="button" role="tab">Bolt Solutions</button>
                            <button class="nav-link" id="consultants-tab" data-bs-toggle="tab" data-bs-target="#consultants" type="button" role="tab">Consultants</button>
                        </div>
                        <div class="tab-content p-3 border border-top-0 rounded-bottom">
                            <div class="tab-pane fade show active" id="apps" role="tabpanel">
                                <p><strong>Apps</strong> are complete applications that provide specific functionality. These range from small utilities to enterprise-grade solutions for specific business processes. Apps can be installed into Salesforce organizations and typically include multiple components, data models, and business logic.</p>
                            </div>
                            <div class="tab-pane fade" id="components" role="tabpanel">
                                <p><strong>Components</strong> are reusable building blocks that can be assembled into custom applications. These include Lightning components, flow templates, dashboards, and data connectors. Components accelerate development by providing pre-built functionality that can be configured and combined.</p>
                            </div>
                            <div class="tab-pane fade" id="bolt" role="tabpanel">
                                <p><strong>Bolt Solutions</strong> are pre-built templates for Experience Cloud sites (formerly Communities). These provide industry-specific or use case-specific portal templates with pre-configured pages, components, and branding that can be customized and deployed quickly.</p>
                            </div>
                            <div class="tab-pane fade" id="consultants" role="tabpanel">
                                <p><strong>Consultants</strong> are implementation partners who provide services for specific industries, products, or use cases. The AppExchange includes a directory of certified consulting partners with reviews, specializations, and contact information to help customers find the right implementation assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>AppExchange Architecture</h4>
                    <p>Solutions on AppExchange are architected with these principles:</p>
                    <ul>
                        <li><strong>Packaging Framework:</strong> Managed packages for encapsulating solutions</li>
                        <li><strong>Namespacing:</strong> Preventing conflicts between packaged components</li>
                        <li><strong>Upgrade Mechanisms:</strong> Seamless upgrades without disrupting configurations</li>
                        <li><strong>Security Review:</strong> Rigorous assessment of security best practices</li>
                        <li><strong>Compatibility:</strong> Testing across Salesforce releases and configurations</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Partner Program</h4>
                    <p>The Salesforce partner ecosystem includes several key participant types:</p>
                    <ul>
                        <li><strong>ISV Partners:</strong> Build and sell applications on AppExchange</li>
                        <li><strong>Consulting Partners:</strong> Implement Salesforce and custom solutions</li>
                        <li><strong>OEM Partners:</strong> Embed Salesforce platform within their own offerings</li>
                        <li><strong>Technology Partners:</strong> Integrate their technologies with Salesforce</li>
                        <li><strong>Industry Partners:</strong> Provide specialized industry solutions</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What is the name of Salesforce's marketplace for pre-built applications and components?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">AppExchange</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">App Store</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Salesforce Marketplace</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Force.com Exchange</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Ensuring quality and security across thousands of partner solutions",
                "Managing compatibility with platform evolution and updates",
                "Balancing partner innovation with platform governance",
                "Scaling ecosystem support across a growing partner base",
                "Providing consistent customer experiences across ecosystem offerings"
            ]
        },
        {
            id: 17,
            title: 'Salesforce On Salesforce',
            icon: 'bi-infinity',
            summary: 'Learn how Salesforce uses its own platform to run its business and drive innovation.',
            content: `
                <h2>Salesforce On Salesforce</h2>
                <div class="module-section">
                    <p>Salesforce is one of the largest users of its own platform, running critical business operations on the same technology it provides to customers. This "Salesforce on Salesforce" approach provides both a powerful proof point for the platform's capabilities and a testbed for continuous innovation.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Aspects of Salesforce on Salesforce</h5>
                        <ul>
                            <li><strong>Sales Operations:</strong> Managing sales processes with Sales Cloud</li>
                            <li><strong>Customer Support:</strong> Providing service with Service Cloud</li>
                            <li><strong>Marketing:</strong> Driving campaigns with Marketing Cloud</li>
                            <li><strong>Internal Applications:</strong> Building custom apps for employee needs</li>
                            <li><strong>Product Development:</strong> Using the platform to build new products</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Internal Use Cases</h4>
                    <p>Salesforce uses its own platform in innovative ways across the organization:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Internal Use Cases</h5>
                        <div class="accordion" id="internalUseCases">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#useCase1">
                                        Sales and Revenue Operations
                                    </button>
                                </h2>
                                <div id="useCase1" class="accordion-collapse collapse" data-bs-parent="#internalUseCases">
                                    <div class="accordion-body">
                                        <p>Salesforce manages its entire global sales operation on Sales Cloud, including opportunity management, forecasting, territory planning, and sales enablement. The sales process is heavily automated with Einstein AI providing predictive lead scoring, opportunity insights, and forecasting accuracy.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#useCase2">
                                        Customer Success and Support
                                    </button>
                                </h2>
                                <div id="useCase2" class="accordion-collapse collapse" data-bs-parent="#internalUseCases">
                                    <div class="accordion-body">
                                        <p>Salesforce's customer support organization uses Service Cloud to manage cases, knowledge, and entitlements. The support operation handles millions of cases annually, using AI-powered case routing, knowledge recommendations, and automated solution suggestions to maximize efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#useCase3">
                                        Employee Experience
                                    </button>
                                </h2>
                                <div id="useCase3" class="accordion-collapse collapse" data-bs-parent="#internalUseCases">
                                    <div class="accordion-body">
                                        <p>Salesforce has built numerous employee-facing applications on the platform, including Concierge for IT services, Aloha for employee onboarding, and systems for procurement, legal requests, and facilities management. These applications use Flow, Lightning Web Components, and Einstein to provide seamless employee experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#useCase4">
                                        Product Development
                                    </button>
                                </h2>
                                <div id="useCase4" class="accordion-collapse collapse" data-bs-parent="#internalUseCases">
                                    <div class="accordion-body">
                                        <p>Many Salesforce products are built on the platform itself. For example, Field Service was developed as a managed package on the Salesforce Platform before becoming a core product. This approach accelerates development while ensuring products leverage all platform capabilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Innovation Cycle</h4>
                    <p>The Salesforce on Salesforce approach creates a virtuous innovation cycle:</p>
                    <ul>
                        <li><strong>Internal Needs:</strong> Identifying requirements from real business use cases</li>
                        <li><strong>Prototype Development:</strong> Building initial solutions on the platform</li>
                        <li><strong>Internal Deployment:</strong> Testing at scale within Salesforce operations</li>
                        <li><strong>Refinement:</strong> Improving based on real-world feedback</li>
                        <li><strong>Product Development:</strong> Transforming successful internal solutions into products</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Scale and Impact</h4>
                    <p>Salesforce's internal usage demonstrates the platform's enterprise capabilities:</p>
                    <ul>
                        <li>Supporting 90,000+ employees globally</li>
                        <li>Processing millions of customer interactions</li>
                        <li>Managing complex, billion-dollar sales processes</li>
                        <li>Automating thousands of internal business processes</li>
                        <li>Providing insights across the entire business operation</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>What is a key benefit of the "Salesforce on Salesforce" approach?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Reducing the need for customer feedback</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Eliminating the need for third-party solutions</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Creating a virtuous cycle of innovation based on real-world usage</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Simplifying the platform to only include Salesforce's internal needs</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Balancing internal requirements with customer-focused product development",
                "Managing the complexity of large-scale internal deployments",
                "Ensuring security and compliance for sensitive internal data",
                "Coordinating platform updates with critical internal business operations",
                "Scaling internal support for thousands of employees using custom applications"
            ]
        },
        {
            id: 18,
            title: 'Delivering Transformation At Scale',
            icon: 'bi-arrows-fullscreen',
            summary: 'Learn about Salesforce\'s approach to delivering large-scale platform transformations.',
            content: `
                <h2>Delivering Transformation At Scale</h2>
                <div class="module-section">
                    <p>Salesforce's platform transformation represents one of the most ambitious architectural evolutions ever undertaken in enterprise software. Successfully delivering this transformation required not only technical innovation but also a carefully orchestrated approach to change management, customer migration, and organizational alignment.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Transformation Principles</h5>
                        <ul>
                            <li><strong>Customer-First Design:</strong> Prioritizing customer needs in transformation decisions</li>
                            <li><strong>Staged Migration:</strong> Gradual, phased approach to minimize disruption</li>
                            <li><strong>Backward Compatibility:</strong> Ensuring existing customizations continue to work</li>
                            <li><strong>Technical Guardrails:</strong> Architecture standards to guide the transformation</li>
                            <li><strong>Continuous Delivery:</strong> Releasing changes incrementally rather than all at once</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Transformation Strategy</h4>
                    <p>Salesforce adopted several key strategies to deliver this large-scale transformation:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Transformation Strategies</h5>
                        <div class="accordion" id="transformationStrategies">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#strategy1">
                                        Parallel Architecture
                                    </button>
                                </h2>
                                <div id="strategy1" class="accordion-collapse collapse" data-bs-parent="#transformationStrategies">
                                    <div class="accordion-body">
                                        <p>Salesforce built the new platform architecture in parallel with the existing one, allowing for side-by-side comparison, testing, and gradual migration. This approach reduced risk by enabling validation and verification before customer migration and provided fallback options if issues were encountered.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#strategy2">
                                        Dark Launching
                                    </button>
                                </h2>
                                <div id="strategy2" class="accordion-collapse collapse" data-bs-parent="#transformationStrategies">
                                    <div class="accordion-body">
                                        <p>New platform components were initially deployed in a "dark launch" mode, where they operated in the background without being visible to customers. This allowed testing at production scale with real workloads before making the components active, ensuring reliability before customer exposure.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#strategy3">
                                        Progressive Exposure
                                    </button>
                                </h2>
                                <div id="strategy3" class="accordion-collapse collapse" data-bs-parent="#transformationStrategies">
                                    <div class="accordion-body">
                                        <p>New platform capabilities were introduced to customers incrementally, starting with pilot customers and internal users, then expanding to early adopters, and finally reaching the broader customer base. This approach allowed for feedback collection and refinement at each stage.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#strategy4">
                                        Feature Toggles
                                    </button>
                                </h2>
                                <div id="strategy4" class="accordion-collapse collapse" data-bs-parent="#transformationStrategies">
                                    <div class="accordion-body">
                                        <p>Salesforce implemented an extensive feature toggle system that allowed specific capabilities to be enabled or disabled at a granular level. This provided the ability to quickly roll back problematic features without affecting the entire platform and to customize the migration experience for different customer segments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Organizational Approach</h4>
                    <p>The transformation required significant organizational alignment:</p>
                    <ul>
                        <li><strong>Cross-Functional Teams:</strong> Bringing together product, engineering, operations, and support</li>
                        <li><strong>Customer Success Groups:</strong> Dedicated teams to support customer migrations</li>
                        <li><strong>External Partnerships:</strong> Collaboration with system integrators and consultants</li>
                        <li><strong>Executive Sponsorship:</strong> Leadership alignment and prioritization</li>
                        <li><strong>Technical Champions:</strong> Internal experts to guide implementation teams</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Results and Metrics</h4>
                    <p>The transformation has achieved significant results:</p>
                    <ul>
                        <li>Over 85% of customers migrated to the new platform architecture</li>
                        <li>Improved performance metrics across key transactions</li>
                        <li>Enhanced scalability for B2C and high-volume use cases</li>
                        <li>Expanded geographic availability through Hyperforce</li>
                        <li>Foundation established for generative AI and agent capabilities</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Quick Check</h4>
                    <p>Which approach involves testing new platform components with real workloads before making them visible to customers?</p>
                    <div class="quiz-options">
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Progressive Exposure</div>
                        <div class="quiz-option" data-correct="true" onclick="checkAnswer(this)">Dark Launching</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Parallel Architecture</div>
                        <div class="quiz-option" data-correct="false" onclick="checkAnswer(this)">Feature Toggles</div>
                    </div>
                    <div class="quiz-feedback d-none"></div>
                </div>
            `,
            challenges: [
                "Coordinating complex changes across thousands of engineers and products",
                "Ensuring zero disruption for mission-critical customer operations",
                "Managing the migration of hundreds of thousands of customer organizations",
                "Balancing transformation speed with quality and stability",
                "Maintaining comprehensive testing across countless customer configurations"
            ]
        },
        {
            id: 19,
            title: 'Conclusion',
            icon: 'bi-flag',
            summary: 'Summarize the key learnings and future direction of Salesforce\'s platform transformation.',
            content: `
                <h2>Conclusion</h2>
                <div class="module-section">
                    <p>Salesforce's platform transformation represents a remarkable achievement in enterprise software evolution. By reimagining its architecture while maintaining backward compatibility and reliability, Salesforce has positioned itself for the next generation of customer experiences powered by real-time data, AI, and autonomous agents.</p>
                    
                    <div class="key-highlight">
                        <h5>Key Transformation Outcomes</h5>
                        <ul>
                            <li><strong>Future-Ready Foundation:</strong> Platform ready for emerging technologies and use cases</li>
                            <li><strong>Hyperscale Capabilities:</strong> Support for massive scale and real-time processing</li>
                            <li><strong>Global Deployment:</strong> Expanded availability across global regions</li>
                            <li><strong>AI Integration:</strong> Deep AI capabilities throughout the platform</li>
                            <li><strong>Enhanced Extensibility:</strong> More powerful tools for customization and integration</li>
                        </ul>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Business Impact Drivers</h4>
                    <p>The platform transformation enables several key business impact drivers:</p>
                    
                    <div class="interactive-element">
                        <h5>Explore Business Impact Drivers</h5>
                        <div id="drivers-container" class="row">
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Customer Experience</h5>
                                        <p>The transformed platform enables more personalized, real-time customer interactions across all touchpoints. AI-driven insights and autonomous agents create more responsive and proactive customer experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Operational Efficiency</h5>
                                        <p>Automation capabilities, intelligent workflows, and predictive insights drive significant operational efficiencies. Organizations can automate routine tasks and focus human effort on high-value activities.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Business Agility</h5>
                                        <p>The platform's enhanced flexibility and composable architecture allow organizations to adapt quickly to changing market conditions, launch new offerings, and reconfigure business processes rapidly.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Innovation Velocity</h5>
                                        <p>The modernized platform accelerates innovation by providing powerful low-code tools, pre-built components, and AI capabilities that enable faster solution development and deployment.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Data-Driven Decisions</h5>
                                        <p>Enhanced analytics capabilities, real-time data processing, and AI-powered insights enable more informed decision-making throughout organizations, from frontline workers to executives.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card h-100" onclick="highlightCard(this)">
                                    <div class="card-body">
                                        <h5>Ecosystem Expansion</h5>
                                        <p>The platform transformation enables a broader ecosystem of partners, developers, and solutions that extend core capabilities, creating a multiplier effect on the value delivered to customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="module-section">
                    <h4>Future Directions</h4>
                    <p>The platform transformation sets the stage for future innovations:</p>
                    <ul>
                        <li><strong>Autonomous Agents:</strong> Self-operating business processes and intelligent agents</li>
                        <li><strong>Hyper-Personalization:</strong> Individual-level customization at massive scale</li>
                        <li><strong>Industry Convergence:</strong> Cross-industry solutions and data sharing</li>
                        <li><strong>Embedded Intelligence:</strong> AI capabilities throughout all aspects of the platform</li>
                        <li><strong>Ambient Computing:</strong> Seamless experiences across devices and interfaces</li>
                    </ul>
                </div>

                <div class="module-section">
                    <h4>Key Takeaways</h4>
                    <p>As you complete this training on Salesforce's platform transformation, remember these key lessons:</p>
                    <ul>
                        <li>Successful platform evolution requires balancing innovation with continuity</li>
                        <li>Architectural decisions should be guided by long-term vision and principles</li>
                        <li>Customer needs must remain at the center of transformation efforts</li>
                        <li>Delivering large-scale change requires both technical and organizational strategies</li>
                        <li>Platform capabilities must evolve to address emerging technologies and market shifts</li>
                    </ul>
                </div>

                <div class="quiz-container">
                    <h4>Final Check</h4>
                    <p>What percentage of Salesforce customers have been migrated to the new platform architecture?</p>
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
                "Continuing to innovate while maintaining the stability enterprises require",
                "Addressing emerging ethical considerations around AI and automation",
                "Balancing standardization with customization as the platform evolves",
                "Managing the growing complexity of the overall ecosystem",
                "Preparing for new computing paradigms and interface technologies"
            ]
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

        // Card highlighting in Conclusion module
        if (module.id === 19) {
            window.highlightCard = function(element) {
                const cards = document.querySelectorAll('#drivers-container .card');
                cards.forEach(card => card.classList.remove('bg-primary', 'text-white'));
                element.classList.add('bg-primary', 'text-white');
            };
        }
        
        // Timeline item highlighting in AI module
        if (module.id === 7) {
            window.highlightTimelineItem = function(element) {
                const items = document.querySelectorAll('.timeline-item');
                items.forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.timeline-badge').classList.remove('bg-success');
                    item.querySelector('.timeline-badge').classList.add('bg-primary');
                });
                element.classList.add('active');
                element.querySelector('.timeline-badge').classList.remove('bg-primary');
                element.querySelector('.timeline-badge').classList.add('bg-success');
            };
        }
        
        // Flow type selection in Automation module
        if (module.id === 9) {
            window.selectFlowType = function(element, type) {
                const cards = document.querySelectorAll('.flow-card');
                cards.forEach(card => card.classList.remove('bg-light', 'border-primary'));
                element.classList.add('bg-light', 'border-primary');
                
                const detailsContainer = document.getElementById('flow-details');
                detailsContainer.classList.remove('d-none');
                
                let details = '';
                switch(type) {
                    case 'screen':
                        details = `
                            <h6>Screen Flow Details</h6>
                            <p>Screen flows are interactive experiences that guide users through complex business processes with a wizard-like interface. Key features include:</p>
                            <ul>
                                <li>Multiple screens with dynamic form elements</li>
                                <li>Branching logic based on user inputs</li>
                                <li>Embedded in Lightning pages, Experience sites, or mobile apps</li>
                                <li>Ability to collect and process user input</li>
                            </ul>
                        `;
                        break;
                    case 'record':
                        details = `
                            <h6>Record-Triggered Flow Details</h6>
                            <p>Record-triggered flows automatically execute when records are created, updated, or deleted. Key features include:</p>
                            <ul>
                                <li>Before-save and after-save execution options</li>
                                <li>Record-level filtering conditions</li>
                                <li>Access to previous and current record values</li>
                                <li>Efficient processing of related records</li>
                            </ul>
                        `;
                        break;
                    case 'scheduled':
                        details = `
                            <h6>Scheduled Flow Details</h6>
                            <p>Scheduled flows run at specified times to process records in batch. Key features include:</p>
                            <ul>
                                <li>Recurrence patterns (hourly, daily, weekly, etc.)</li>
                                <li>Batch processing of records matching criteria</li>
                                <li>Optimization for large data volumes</li>
                                <li>Transaction control for complex operations</li>
                            </ul>
                        `;
                        break;
                    case 'platform':
                        details = `
                            <h6>Platform Event Flow Details</h6>
                            <p>Platform event flows respond to custom platform events for event-driven architectures. Key features include:</p>
                            <ul>
                                <li>Real-time processing of event messages</li>
                                <li>Integration with external systems through events</li>
                                <li>Decoupled system architecture support</li>
                                <li>Scalable event handling with replay capability</li>
                            </ul>
                        `;
                        break;
                    case 'autolaunched':
                        details = `
                            <h6>Autolaunched Flow Details</h6>
                            <p>Autolaunched flows run in the background when called from other processes. Key features include:</p>
                            <ul>
                                <li>Invocation from process builder, apex, or APIs</li>
                                <li>Headless execution without user interface</li>
                                <li>Reusable components for complex business logic</li>
                                <li>Support for subflows and modular design</li>
                            </ul>
                        `;
                        break;
                    case 'orchestrator':
                        details = `
                            <h6>Flow Orchestrator Details</h6>
                            <p>Flow Orchestrator manages complex multi-step, multi-user business processes. Key features include:</p>
                            <ul>
                                <li>Multi-user workflow orchestration</li>
                                <li>Stage-based process management</li>
                                <li>Work assignment and routing</li>
                                <li>Process tracking and visualization</li>
                            </ul>
                        `;
                        break;
                }
                
                detailsContainer.innerHTML = `<div class="alert alert-info">${details}</div>`;
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