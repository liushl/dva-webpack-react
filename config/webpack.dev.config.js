const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBar = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const common = require("./webpack.common.config.js");

let DEFAULT_PORT = 9000;

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: DEFAULT_PORT,
    open: true,
    hot: true,
    quiet: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, '../src/index.ejs'),
      hash: true,
      isDev: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new ProgressBar({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${DEFAULT_PORT}`],
      },
    }),
  ],
});