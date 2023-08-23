const path = require('path');
const webPack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    path: __dirname + '/public',
    filename: 'script.js',
    assetModuleFilename: 'assets/images/[name]-[hash][ext]',
  },
  devServer: {
    port: 5000,
    static: './public',
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {from: './src/assets/icons', to: 'assets/icons'},
        {from: './src/assets/icons/social', to: 'assets/icons/social'},
        {from: './src/assets/images', to: 'assets/images'},
      ],
    }),
  ],
};
