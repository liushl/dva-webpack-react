const path = require('path');
const webpack = require('webpack');
module.exports = {
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  entry: {
    vendor: [
      'antd-mobile',  
      'axios', 
      'dva', 
      'dva-loading', 
      'react', 
      'react-dom', 
      'redux',
      'react-redux' 
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'vendor_lib_[hash:8]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, '../dist/vendor-manifest.json'),
      name: 'vendor_lib_[hash:8]',
    })
  ],
};