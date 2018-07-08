
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');


const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);

// webpack hmr

const app = require('../src/server');
const server = require('express')()
server.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath
  })
);
server.use(require("webpack-hot-middleware")(compiler, { }));
server.use((req, res) => app.handle(req,res))
server.listen(3000, () => console.log('App is listning on port 3000'))