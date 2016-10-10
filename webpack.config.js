const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },

  cache: false,
  debug: true,
  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [path.join(__dirname, 'src')],
        loaders: ['babel'],
      },
      {
        test: /\.scss/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'autoprefixer?{browsers:["last 2 version"]}',
          'sass?outputStyle=expanded',
        ],
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
