const OpenBrowserPlugin = require('open-browser-webpack-plugin');
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
        loader: 'html',
        exclude: /node_modules/
      }, {
        test: /\.scss?$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  devtool: 'eval-source-map'
}