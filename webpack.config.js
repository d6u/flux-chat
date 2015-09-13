module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: './js',
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime'
      }
    ]
  }
};
