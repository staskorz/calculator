const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);

// webpack hmr
app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler, {
}));
app.use(express.static('static'));

// main route
app.get('*', (req, res) => {
  console.log('got request');
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
});

// app start up
app.listen(3000, () => console.log('App listening on port 3000!'));