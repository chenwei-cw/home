const merge = require('webpack-merge'); // 合并webpack配置文件的插件
const common = require('./webpack.common.js');
const webpack = require('webpack');

const devConfig = {
    mode: 'development',  //process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
    devtool: 'inline-source-map', //
    devServer: {
        contentBase:'./dist',
        host:'0.0.0.0',
        port:8081,
        hot: true,
        historyApiFallback: true,
        inline: true,
        proxy: {
            
        },
        open:false,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = merge(common,devConfig);//合并并导出dev和common文件`