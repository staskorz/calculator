const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const trackingCookieMiddleware = require('./server/express-middleware/tracking-cookie');

app.use(cookieParser());

app.use(express.static('static'));

// main route
app.use('*', trackingCookieMiddleware);

app.get('*', (req, res) => {
  console.log('got request');
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// app start up
module.exports = app;
