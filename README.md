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
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/platformpro.git
   cd platformpro
   ```

2. Set up Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Set up frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   uvicorn main:app --reload

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

### Running Tests

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

## Project Structure

```
platformpro/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   └── services/
│   ├── tests/
│   └── main.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
├── docs/
└── README.md
```

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