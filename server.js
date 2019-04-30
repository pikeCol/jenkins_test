'use strict';

const express = require('express');
const path = require('path');
// Constants
const PORT = 8086;
const HOST = '0.0.0.0';

// App
const app = express();
console.log(path.join(__dirname,'./index.html'))
app.get('/sub.html', (req, res) => {
  res.sendFile(path.join(__dirname,'./sub.html'))
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
