# Basic Express Project

An Express.js server extending a basic root-route setup with multiple routes, route parameters, query parameters, POST requests, and middleware.

## Tech Stack
- Node.js
- Express.js

## Routes

| Route | Method | Description |
|---|---|---|
| `/` | GET | Root welcome message |
| `/about` | GET | About page |
| `/contact` | GET | Contact info |
| `/users` | GET | Returns list of users (JSON) |
| `/users/:id` | GET | Returns requested user ID |
| `/search?name=value` | GET | Reads query parameter and returns result |
| `/users` | POST | Accepts new user data, sends it back |
| `/courses` | GET | Returns list of courses (optional challenge) |
| `/courses/:id` | GET | Returns a single course (optional challenge) |
| `/courses` | POST | Adds a new course (optional challenge) |

## Middleware
A logging middleware runs on every request, printing the HTTP method and URL to the terminal.

## How to Run
```bash
git clone https://github.com/YOUR-USERNAME/basic-express-project-VeronicahWanjuu.git
cd basic-express-project-VeronicahWanjuu
npm install
node server.js
```
Visit `http://localhost:3000` and test routes above. Use Postman/Thunder Client for POST routes.

## What I Learned
- Defining multiple routes in Express
- Using route parameters (`req.params`) and query parameters (`req.query`)
- Sending JSON responses
- Handling POST requests and reading `req.body`
- Writing and using custom middleware

## Author
Veronicah Wanjuu