const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/app'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'htmlhint',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'stylelint'
    }],
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.html?$/,
        loaders: ['html', 'html-minify'],
        exclude: /node_modules/
      }, {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style', 'css!csso!postcss!sass')
    }],
  },
  postcss() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    noInfo: true,
    contentBase: 'app'
  }
}