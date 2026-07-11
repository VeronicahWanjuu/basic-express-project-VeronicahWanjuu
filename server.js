const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page for my Express server.');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at: hello@example.com');
});

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You requested user with ID: ${userId}`);
});

app.get('/search', (req, res) => {
  const name = req.query.name || 'no name provided';
  res.send(`Search result for: ${name}`);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.json({
    message: 'User received successfully',
    data: newUser
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});