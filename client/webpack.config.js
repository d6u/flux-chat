module.exports = {
  entry: './source/index.js',
  output: {
    filename: 'index.js',
    path: './public',
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
