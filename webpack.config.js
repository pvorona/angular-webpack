const path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.html?$/,
        loader: 'html'
      }, {
        test: /\.scss?$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}