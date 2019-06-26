const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

const prodConfig = {
  mode: 'production', // development production
  devtool: 'cheap-module-source-map' // development: cheap-module-eval-source-map; production: cheap-module-source-map;
}

module.exports = merge(baseConfig, prodConfig)
