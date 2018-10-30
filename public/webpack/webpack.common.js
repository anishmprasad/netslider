const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
const VENDOR_LIBS=['react','react-dom','react-redux','react-router-dom','redux','redux-thunk','react-id-swiper','axios','prop-types','vis-react'];

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let root_path = process.cwd() + "/";

module.exports = {
  entry: {
    bundle:path.join(root_path, 'src/index'),
    vendor:VENDOR_LIBS
  },
  resolve: {
   alias: {
     styles: path.join(root_path,'assets/stylesheet'),
     containers: path.join(root_path,'src/containers'),
     searchContainers: path.join(root_path,'src/containers/search'),
     learnContainers: path.join(root_path,'src/containers/study/learn'),
     commonContainers: path.join(root_path,'src/containers/common'),
     studyContainers: path.join(root_path,'src/containers/study'),
     practiceContainers: path.join(root_path,'src/containers/practice'),


     components: path.join(root_path,'src/components'),
     headerComponents: path.join(root_path,'src/components/header'),
     searchComponents: path.join(root_path,'src/components/search'),
     commonComponents: path.join(root_path,'src/components/common'),
     studyComponents: path.join(root_path,'src/components/study'),
     learnComponents: path.join(root_path,'src/components/study/learn'),
     PracticeComponents: path.join(root_path,'src/components/practice'),


     styleee: path.join(root_path,'assets/stylesheet/search'),
     styleLibrary: path.join(root_path,'assets/stylesheet/lib'),
     styleCommon: path.join(root_path,'assets/stylesheet/common'),
     styleLearn: path.join(root_path,'assets/stylesheet/study/learn'),
     stylePractice: path.join(root_path,'assets/stylesheet/practice'),


     learnActions:path.join(root_path,'src/actions/study/learn'),
     commonActions:path.join(root_path,'src/actions/common'),
     searchResultActions:path.join(root_path,'src/actions/searchResults'),
     studyActions:path.join(root_path,'src/actions/study'),
     userAuthActions:path.join(root_path,'src/actions/userAuth'),

     learnReducers:path.join(root_path,'src/reducers/study/learn'),

     imageRootPath:path.join(root_path,'assets/images'),
     analytics:path.join(root_path,'src/analytics'),
     actions:path.join(root_path,'src/actions'),
     constants:path.join(root_path,'src/constants'),
     reducers: path.join(root_path,'src/reducers'),
     store: path.join(root_path,'src/store')
   },
   extensions: ['.jsx', '.js','.scss','.json','.css']
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|jpg|svg|json|otf|gif)$/,
        use:[{
          loader: 'url-loader?limit=8192' }]
      },
      {
        test: /\.json$/,
        use:[{
          loader: "json-loader",}]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
            use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', "stage-0"],
            plugins: [['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                // this is important for Webpack HMR:
                locals: ['module']
              }],
            }]]
          }
        }
      },{ test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(root_path, 'public/index.html'),
      filename: path.join(root_path, 'dist/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      hash:true,
      inject:false
    })
  ],
};
