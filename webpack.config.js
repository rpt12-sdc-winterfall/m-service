const path = require('path');

const entry = path.join(__dirname, '/client/src');
const output = path.join(__dirname, '/public/js');

module.exports = {
  entry: `${entry}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: output,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/react', '@babel/env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
