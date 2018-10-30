var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
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
              root: 'https://d61l6eyig2n9c.cloudfront.net',
              minimize: true
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
      path: path.join(root_path, 'dist/stage3'),
      publicPath: 'https://d61l6eyig2n9c.cloudfront.net',
      filename: '[name].[hash].js',
      // chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'image_path': function(path){
          return  'https://d61l6eyig2n9c.cloudfront.net/images' + path;
        },
        'process.env': {
          NODE_ENV: JSON.stringify('staging3'),
          PLATFORM_ENV: JSON.stringify('web'),
        },
      }),
      new ExtractTextPlugin("extractedStylesheet.[hash].min.css"),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        minRatio: 0.8
      }),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
  });
