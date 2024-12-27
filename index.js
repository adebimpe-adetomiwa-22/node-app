const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Hello, World! Your Node.js app is live!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is a sample Node.js application hosted live.');
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
