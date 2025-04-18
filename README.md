# PlatformPro - Salesforce Platform Training Portal

![PlatformPro Logo](assets/logo.png)

A modern, cohort-based training platform for learning the Salesforce Platform architecture and capabilities.

## Features

- 🎯 Personalized Learning Paths for Different Cohorts:
  - Software Engineers
  - Product Managers
  - Sales Professionals
  - General Interest
- 📚 14 Comprehensive Training Modules
- ✅ Interactive Quizzes and Progress Tracking
- 🎨 Modern, Responsive UI
- 🔐 Secure User Authentication
- 📊 Progress Analytics

## Tech Stack

- **Backend**: Python 3.11+ with FastAPI
- **Database**: PostgreSQL
- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Testing**: pytest (backend), Jest (frontend)
- **Documentation**: OpenAPI/Swagger, JSDoc
- **Authentication**: JWT-based

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+ and npm (Install from [Node.js official website](https://nodejs.org/))
- PostgreSQL 14+
- Docker (optional)

#### Installing Prerequisites

1. **Python 3.11+**:
   - Download and install from [Python.org](https://www.python.org/downloads/)
   - Verify installation: `python --version`

2. **Node.js and npm**:
   - Download and install from [Node.js official website](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version  # Should be 18.x or higher
     npm --version   # Should be 8.x or higher
     ```

3. **PostgreSQL**:
   - Download and install from [PostgreSQL official website](https://www.postgresql.org/download/)
   - Verify installation: `psql --version`

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/platformpro.git
   cd salesforce-architecture-trainer
   ```

2. Set up backend:
   ```bash
   # Create and activate Python virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   
   # Install backend dependencies
   cd backend
   pip install -r requirements.txt
   
   # Set up environment variables
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Set up frontend:
   ```bash
   cd ../frontend
   npm install
   ```

4. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   # Make sure you're in the backend directory and virtual environment is activated
   cd backend
   uvicorn main:app --reload

   # Terminal 2 - Frontend
   # Make sure you're in the frontend directory
   cd frontend
   npm run dev
   ```

### Running Tests

```bash
# Backend tests
# Make sure you're in the backend directory and virtual environment is activated
cd backend
pytest

# Frontend tests
# Make sure you're in the frontend directory
cd frontend
npm test
```

## Project Structure

```
salesforce-architecture-trainer/
├── backend/
│   ├── app/
│   ├── migrations/
│   ├── tests/
│   ├── alembic.ini
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   └── src/
│       └── components/
│           ├── Layout.tsx
│           └── ProtectedRoute.tsx
└── README.md
```

The project is organized into two main directories:

### Backend
- `app/`: Core application logic and API endpoints
- `migrations/`: Database migration files managed by Alembic
- `tests/`: Test suite for backend functionality
- `alembic.ini`: Alembic configuration for database migrations
- `main.py`: FastAPI application entry point
- `requirements.txt`: Python dependencies
- `.env.example`: Example environment variables template

### Frontend
- `src/components/`: React components including layout and authentication
  - `Layout.tsx`: Main application layout with navigation
  - `ProtectedRoute.tsx`: Authentication wrapper component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Salesforce Platform Architecture documentation
- FastAPI framework
- React and the React community
- Tailwind CSS team