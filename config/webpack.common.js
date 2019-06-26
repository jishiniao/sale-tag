const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackModule = require('./common')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../App.js')]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Tag Component Example',
      template: path.resolve(__dirname, '../assets/tag.html')
    }),
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: webpackModule,
}
