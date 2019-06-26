module.exports = {
  rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    },
    {
      test: /\.svg$/,
      use: [{
        loader: 'raw-loader',
        options: {
          limit: 8192
        }
      }]
    }
  ]
}