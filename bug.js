const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is incorrect. It does not check if the user object exists.
  res.send(`<h1>Welcome ${req.user.name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});