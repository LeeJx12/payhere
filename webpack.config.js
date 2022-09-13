const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv');
const webpack = require('webpack');
dotenv.config();

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      }
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig, 
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    })
  ],
  devServer: {
  	open: true,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: './'
    }
  },
  devtool: 'source-map',
  resolve: {
    aliasFields: [
        'browser'
    ],
    extensions: [
        '.web.js',

        // Webpack defaults:
        '.js',
        '.json'
    ]
  }
};
