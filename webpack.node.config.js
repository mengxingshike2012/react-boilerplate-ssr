const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './server/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },

  cache: false,
  debug: true,
  devtool: 'eval',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'server')],
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss/,
        loaders: ['ignore'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src'),
  },
  plugins: [
  ],
};
