const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackModule = require('./common')

module.exports = {
  entry: {
    index: [path.resolve(__dirname, '../src/index.js')]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/'
  },
  module: webpackModule,
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
