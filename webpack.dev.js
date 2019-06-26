const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

const devConfig = {
  mode: 'development', // development production
  devtool: 'cheap-module-eval-source-map', // development: cheap-module-eval-source-map; production: cheap-module-source-map;
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(baseConfig, devConfig)
