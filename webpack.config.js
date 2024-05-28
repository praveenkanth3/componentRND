
// webpack.config.js
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
    ]
  },

};