
var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
};

/*
 * Config
 */
module.exports = {
  // static data for index.html
  metadata: METADATA,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  // our angular app
  entry: {
    'polyfills': './src/polyfills.ts',
    'main': './src/main.browser.ts',
    'vendor': './src/vendor.ts'
  },

  // Config for our build files
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/, loader: 'source-map-loader', exclude: [
              // these packages have problems with their sourcemaps
              helpers.root('node_modules/rxjs'),
              helpers.root('node_modules/@angular2-material')
            ]
      }
    ],
    loaders: [
      // Support Angular 2 async routes via .async.ts
      { test: /\.async\.ts$/, loaders: ['es6-promise-loader', 'ts-loader'], exclude: [ /\.(spec|e2e)\.ts$/ ] },

      // Support for .ts files.
      {test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/]},

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ helpers.root('src/index.html') ] },

      // Support for SCSS
      { test: /\.scss$/, include: [path.resolve(__dirname, 'src/assets/styles')], loader: 'style!css!!sass' }
    ]
  },

  plugins: [
    new ForkCheckerPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.CommonsChunkPlugin({name: ['main', 'vendor', 'polyfills'], minChunks: Infinity}),

    // static assets
    new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]),

    // generating html
    new HtmlWebpackPlugin({template: 'src/index.html', chunksSortMode: 'none'}),

    // Environment helpers
    new webpack.DefinePlugin({'ENV': JSON.stringify(METADATA.ENV), 'HMR': HMR})
  ],

  sassLoader: {
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  // our Webpack Development Server config
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  // Include polyfills or mocks for various node stuff
  node: {
    global: 'window',
    process: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
