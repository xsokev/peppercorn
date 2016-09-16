const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    actionbar: './_jssrc/examples/actionbar.js',
    actionitem: './_jssrc/examples/actionitem.js'
  },
  output: {
    path: './js/examples/',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
