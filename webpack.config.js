const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');
const TARGET  = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  entry: {},
};

PATHS.entry.bootstrap = path.join(PATHS.app, 'bootstrap.jsx');
process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.entry,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass'],
        include: PATHS.app,
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        include: PATHS.app,
        loaders: ['babel?cacheDirectory'],
      },
    ],
  },
};

if (TARGET === 'dev-server') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
} else {
  module.exports = merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  });
}
