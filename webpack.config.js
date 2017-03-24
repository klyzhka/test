'use strict';

var path = require('path')
  , ExtractTextPlugin = require("extract-text-webpack-plugin")
  , CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./scripts/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    module: {
     rules: [{
       test: /\.css$/,
       use: ExtractTextPlugin.extract({
         use: 'css-loader'
       })
      },
      {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract({
         use: ['css-loader', 'sass-loader']
       })
      },
      {
       test: /\.(eot|woff2|woff|ttf|svg|png|jpg|gif)$/,
       use: 'file-loader'
      }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
          filename: (getPath) => {
            return getPath('styles/[name]-[contenthash].css')
          }
        })
    ]
};