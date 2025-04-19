# Salesforce Architecture Trainer

A client-side web application designed to help users learn about Salesforce's platform transformation through interactive modules based on the [Salesforce Architecture Fundamentals blog](https://architect.salesforce.com/fundamentals/platform-transformation).

## Features

- 19 engaging learning modules that correspond to chapters from the Salesforce Architecture blog
- Interactive elements including quizzes, expandable sections, and exploration tools
- Progress tracking within the browser session
- Dark/light theme toggle
- Responsive design for mobile and desktop
- Fluid animations and transitions

## Tech Stack

- HTML5
- CSS3 with CSS Variables
- JavaScript (Vanilla)
- Bootstrap 5 for layout and components
- Bootstrap Icons
- Marked.js for Markdown rendering

## Getting Started

### Option 1: Direct File Opening (Simplest)

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/salesforce-architecture-trainer.git
   cd salesforce-architecture-trainer
   ```
2. Open `index.html` directly in your web browser

### Option 2: Using a Local Server (Recommended)

Using a local server is recommended for the best experience as it allows all features to work properly.

#### Using Python (pre-installed on most macOS/Linux systems)

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/salesforce-architecture-trainer.git
   cd salesforce-architecture-trainer
   ```

2. Start a simple HTTP server:
   - Python 3:
     ```
     python -m http.server 8000
     ```
   - Python 2:
     ```
     python -m SimpleHTTPServer 8000
     ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

#### Using Node.js (if you have Node.js installed)

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/salesforce-architecture-trainer.git
   cd salesforce-architecture-trainer
   ```

2. Install a simple HTTP server:
   ```
   npm install -g http-server
   ```

3. Run the server:
   ```
   http-server -p 8000
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Structure

- `index.html` - Main HTML structure
- `styles.css` - Custom styling with animations and theming
- `app.js` - Application logic and module content

## Usage

- Browse the 19 modules on the home screen
- Click on any module to start learning
- Navigate between modules using the next/previous buttons
- Check your progress using the progress button in the header
- Toggle between light and dark themes with the theme button

## License

MIT