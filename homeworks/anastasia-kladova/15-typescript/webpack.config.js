const path = require('path');
const webPack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/script.ts',
  output: {path: __dirname + '/public', filename: 'script.js'},
  devServer: {
    port: 5000,
    static: './public',
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'html'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  //   watch: true,
};
