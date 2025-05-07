# MIT Bootcamp Project: Basic Express Backend

This project is a simple Node.js backend built with [Express](https://expressjs.com/) for handling API requests. It serves as a foundational backend for applications, suitable for learning and prototyping purposes during the MIT Bootcamp.

## 🚀 Features

- ⚙️ Lightweight Express server
- 📂 Serves static files from the `public` directory
- 🔄 Basic API routes (GET, POST)
- 📄 Utilizes `db.json` as a mock database
- 🌐 CORS support for frontend integration
- 🛠️ Simple and clean project structure

## 🛠️ Tech Stack

- Node.js
- Express
- CORS
- dotenv (optional for environment variables)

## 📁 Project Structure

├── public/ # Static files served to the client
├── db.json # Mock database file
├── http_server.js # Main server file
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── .gitignore # Specifies files to ignore in Git
├── procfile # For deployment configurations (e.g., Heroku)
└── README.md # Project documentation

## 📦 Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/czapata08/basic-express-http-server.git
   cd basic-express-http-server
   
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node http_server.js
The server will start on http://localhost:3000 by default.

🌐 API Endpoints
GET /api/data
Retrieves data from the mock database.

POST /api/data
Adds new data to the mock database.

Note: Ensure that the db.json file exists and is properly formatted as a JSON array.

🔧 Configuration
CORS:
The server uses the cors middleware to allow cross-origin requests. This is essential for frontend-backend communication, especially when they are hosted on different domains or ports.

Environment Variables:
You can use the dotenv package to manage environment variables. Create a .env file in the root directory and define variables like PORT to configure the server port.

📄 License
This project is licensed under the MIT License. Feel free to use and modify it for educational and personal projects.

Made with ❤️ during the MIT Bootcamp.
