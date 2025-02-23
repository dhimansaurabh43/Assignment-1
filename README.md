🎮 Game API
A simple Express.js REST API for managing game data with CRUD operations.
🚀 Getting Started
Install Dependencies
npm install express

Run the Server
node server.js
OR using nodemon:
nodemon server.js

📌 API Endpoints
Get All Games
Method: GET
http://localhost:3000/api/games

Get Game by ID
Method: GET
http://localhost:3000/api/game/:id

Add a New Game
Method: POST
http://localhost:3000/api/game

Update a Game
Method: PUT
http://localhost:3000/api/game/:id

Delete a Game
Method: DELETE
http://localhost:3000/api/game/:id

🔥 Middleware
Validation Middleware: Ensures required fields for POST requests.
Logging Middleware: Logs all incoming requests.
📌 Author
🚀 Developed by Saurabh Dhiman
