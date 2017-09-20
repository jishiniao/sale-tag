const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./config/webpack.dev.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './examples/index.ejs'))
})

app.listen(3001, function() {
  console.log('sale-tag listening on port 3001')
})
