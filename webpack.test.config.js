
var helpers = require('./helpers');
// Webpack Plugins
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin  = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = helpers.validate({

  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts','.js'],
    root: helpers.root('src'),
  },
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint-loader', exclude: [helpers.root('node_modules')]},
      {test: /\.js$/, loader: "source-map-loader", exclude: [
        // these packages have problems with their sourcemaps
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular2-material')
      ]}
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          "compilerOptions": {

            // Remove TypeScript helpers to be injected
            // below by DefinePlugin
            "removeComments": true

          }
        },
        exclude: [/\.e2e\.ts$/]
      },
      { test: /\.json$/, loader: 'json-loader', exclude: [helpers.root('src/index.html')]},
      { test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')]},
      { test: /\.css$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')]}
    ],
    postLoaders: [
      // instrument only testing sources with Istanbul
      {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({'ENV': JSON.stringify(ENV), 'HMR': false})
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
  // we need this due to problems with es6-shim
  node: {
    global: 'window',
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
