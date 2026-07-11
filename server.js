const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});