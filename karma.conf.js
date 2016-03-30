
module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test.js');

  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    // list of files / patterns to load in the browser
    // we are building the test environment in ./spec-bundle.js
    files: [ { pattern: './config/spec-bundle.js', watched: false } ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    reporters: [ 'mocha', 'coverage' ],

    // web server port
    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browsers: [
      'Chrome',
      //'PhantomJS'
    ],

    singleRun: true
  });

};
