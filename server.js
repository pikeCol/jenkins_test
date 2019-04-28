'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1';

// App
const app = express();

app.get('/sub.html', (req, res) => {
  res.sendFile('./sub.html')
});
app.get('/', (req, res) => {
  res.sendFile('./index.html')
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);