const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

const hotMiddlewareClient = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    app:[path.resolve(__dirname, '../examples/index.js'), hotMiddlewareClient]
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../build'),
  //   hot: true
  // },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'sale-tag example',
      template: path.resolve(__dirname, '../examples/index.ejs')
    }),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              "stage-0"
            ]
          }
        }
      }
    ]
  }
}
