// var ClosureCompilerPlugin = require('webpack-closure-compiler');
var path = require('path');
var React = require('react');

var config = {
  cache: true,
  entry: path.resolve(__dirname, './src/client/root.js'),
  output: {
    path: path.resolve(__dirname, ''),
    filename: './src/client/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'json', '.scss']
  },
  module: {
    loaders: [
      {
        test: /(\.scss|\.css)$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          require.resolve('sass-loader') + '?sourceMap'
        ]
      },
      {
        test: require.resolve("react"),
        loader: "expose?React"
      },
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // The module to load. "babel" is short for "babel-loader"
        query: {
          presets: ['es2015', 'react']
        }

      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins: [
    // new ClosureCompilerPlugin()
  ]
};
module.exports = config;
