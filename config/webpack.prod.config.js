const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common.config.js");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, '../src/index.ejs'),
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
    ]
  },
});
