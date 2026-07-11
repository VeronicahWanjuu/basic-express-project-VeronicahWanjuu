const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});