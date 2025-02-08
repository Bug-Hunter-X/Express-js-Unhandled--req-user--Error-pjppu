const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Check if req.user exists before accessing its properties.
  if (req.user && req.user.name) {
    res.send(`<h1>Welcome ${req.user.name}!</h1>`);
  } else {
    res.send('<h1>Welcome!</h1>'); // Or handle the missing user appropriately
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});