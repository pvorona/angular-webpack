webpackConfig = require('./webpack.config')

module.exports = (config) ->
  config.set
    basePath: 'app/src'
    frameworks: [ 'jasmine' ]
    files: [ '**/*.test.js' ]
    exclude: []
    preprocessors: '**/*.test.js': [ 'webpack' ]
    reporters: [ 'progress' ]
    port: 9876
    colors: true
    logLevel: config.LOG_INFO
    autoWatch: true
    browsers: [ 'Chrome' ]
    singleRun: false
    concurrency: Infinity
    plugins: [
      require('karma-webpack')
      'karma-jasmine'
      'karma-chrome-launcher'
    ]
    webpack: webpackConfig
    webpackMiddleware: noInfo: true
