const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
  entry: {
    main: [
      './src/main.js'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000
        }
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/favicon.png',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  );
}

if (process.env.NODE_ENV === 'development') {
  config.entry.main.unshift(
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server'
  );
  config.plugins.unshift(
    new webpack.HotModuleReplacementPlugin()
  );
  config.devtool = '#source-map';
}

module.exports = config;
