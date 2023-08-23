const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    script: './src/index.js',
    desctopStyles: './src/index.scss',
    mobileStyles: './src/assets/scss/phone.scss',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpe?g|svg|ttf|woff2?|mp3|ogg)$/,
        type: 'asset/resource',
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: './src/assets',
          to: 'assets',
        },
      ],
    }),
  ],
};
