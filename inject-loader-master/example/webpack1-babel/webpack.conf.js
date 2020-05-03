const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    main: './test/main_test',
  },

  output: {
    path: path.resolve(__dirname, './dest'),
    filename: 'bundle.js',
  },

  target: 'node',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(\/node_modules$)/,
      },
    ],
  },

  plugins: [new webpack.DefinePlugin({__VALUEA__: 10})],

  resolve: {
    root: [path.resolve(__dirname, './src'), path.resolve(__dirname, './test')],
    extensions: ['', '.js'],
    modules: [__dirname, path.resolve(__dirname, './node_modules')],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules', '../../'],
  },
};
