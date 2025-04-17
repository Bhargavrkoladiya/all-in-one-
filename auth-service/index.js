const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Auth Service is running');
});

app.listen(4000, () => {
  console.log('Auth Service listening on port 4000');
});
