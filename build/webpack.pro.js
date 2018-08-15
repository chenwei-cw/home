const merge = require('webpack-merge'); // 合并webpack配置文件的插件
const common = require('./webpack.common.js');
const webpack = require('webpack');

const devConfig = {
    mode: 'production',  //process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
    // devtool: 'inline-source-map', //
}

module.exports = merge(common,devConfig);//合并并导出dev和common文件`