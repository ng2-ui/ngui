var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    '@ngui/ngui': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "ngui.umd.js",
    library: ["ngui"],
    libraryTarget: "umd"
  },
  externals: [
    /^rxjs\//,    //.... any other way? rx.umd.min.js does work?
    /^@angular\//
  ],
  devtool: 'source-map',
  module: {
    rules: [
      { // Support for .ts files.
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      }
    ]
  }
};

