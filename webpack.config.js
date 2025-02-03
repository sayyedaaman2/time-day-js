const path = require('path');

module.exports = {
  entry: './app.js', // Entry point for your app
  output: {
    filename: 'bundle.js', // Output file for bundled code
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
