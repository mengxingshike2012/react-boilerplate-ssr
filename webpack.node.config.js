const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextWebPackPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './server/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },

  cache: false,
  debug: true,
  devtool: 'eval',

  target: 'node',
  // otherwise, __dirname will be changed to /
  node: {
    __filename: true,
    __dirname: true
  },
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
        loader: ExtractTextWebPackPlugin.extract(
            'style',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'autoprefixer?{browsers:["last 2 version"]}',
            'sass?outputStyle=expanded'
        ),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src'),
  },
  plugins: [
    new ExtractTextWebPackPlugin('styles.css')
  ],
};
