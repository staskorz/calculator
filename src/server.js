const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const trackingCookieMiddleware = require('./server/express-middleware/tracking-cookie');
const abTestingMiddleware = require('./server/express-middleware/ab-testing');

const abTestingExperiments = require('../ab-testing-experiments.json').filter(
  ({ enabled }) => enabled
);

app.use(cookieParser());

app.use(express.static('static'));

// main route
app.get(
  '*',
  trackingCookieMiddleware,
  abTestingMiddleware(abTestingExperiments),
  (req, res) => {
    console.log('got request');
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  }
);

// app start up
module.exports = app;
