/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const paths = require('./paths');

module.exports = {
  devtool: 'eval',
  entry: [paths.appIndexJs],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: '[name].js',
  },
  devServer: {
    contentBase: 'build',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: paths.appNodeModules,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ],
};
