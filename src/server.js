const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('static'));

// main route
app.get('*', (req, res) => {
  console.log('got request');
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
});

// app start up
module.exports = app