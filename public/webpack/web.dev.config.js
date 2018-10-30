var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
let root_path = process.cwd() + "/";

module.exports = webpackMerge(commonConfig, {
    module: {
      rules: [{
        test: /\.scss$/,
        loader:ExtractTextPlugin.extract(
         {fallback: "style-loader",
          use: [
          {
            loader:'css-loader',
            options:{
              root: path.join(root_path,'assets')
            }
          },
        {
          loader:'sass-loader'
        }
        ]})
       }
     ]
    },
    output: {
      path: path.join(root_path, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      compress: true,
      disableHostCheck:true,
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'assets/images', to: 'images'},
      ]),
      new ExtractTextPlugin("extractedStylesheet.css"),
      new webpack.DefinePlugin({
        'image_path': function(path){
          return '/images' + path;
        },
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          PLATFORM_ENV: JSON.stringify('web'),
        },
      })
    ],
  });
