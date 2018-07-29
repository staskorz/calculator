const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const ensureTrackingCookieMiddleware = require('./server/ab-testing/cookie/ensure-tracking-cookie-express-middleware');

app.use(cookieParser());

app.use(express.static('static'));

// main route
app.use('*', ensureTrackingCookieMiddleware);

app.get('*', (req, res) => {
  console.log('got request');
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// app start up
module.exports = app;
