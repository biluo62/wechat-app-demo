const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const config = require('../../config/config');

const pathsUtils = config.utils_paths;
const APP_ENTRY = pathsUtils.client('index.jsx');

const entry = {
  app: APP_ENTRY,
  [config.compiler_vendor_key]: config.compiler_vendors
};

const baseConfig = {
  entry,
  output: {
    path: pathsUtils.dist('client'),
    publicPath: config.compiler_public_path,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      // { test: /\.jsx?$/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.jsx?$/, use: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.(png|jpe?g|gif|svg|webp|woff2)$/,
        use: [
          'url-loader?limit=8192&name=img/[name].[hash:8].[ext]'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss() {
          return [autoprefixer({ browsers: ['last 10 versions'] })];
        },
        eslint: {
          formatter: require('eslint-friendly-formatter'),
          fix: true
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: config.compiler_vendor_key,
      filename: '[name].[hash:8].js'
    }),
    new ExtractTextPlugin({
      filename: '[id].[name].[contenthash:6].css',
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: pathsUtils.client('deps'), to: 'deps' },
      { from: pathsUtils.client('favicons'), to: 'favicons' }
    ])
  ]
};

module.exports = baseConfig;
