const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

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
        loaders: ["style", "css", "postcss", "sass"]
    }],
  },
  postcss() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    noInfo: true,
    contentBase: 'app'
  }
}