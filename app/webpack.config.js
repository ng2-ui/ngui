const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      '@ngui/ngui': '../src/index.ts'
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
    rules: [
      { 
        test: /\.ts$/, 
        use: [{
          loader: 'ts-loader',
          options: {
            include: ['src/**/*.ts', 'app/**/*.ts']
          }
        },
        'angular2-template-loader']
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

if (process.env.NODE_ENV === 'prod') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ];
  config.module.rules.push({
    test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
