const ExtractTextPlugin = require('extract-text-webpack-plugin'); //将css单独打包一个文件
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname, '../');

const entry = {
    index:root+'/src/js/index.js',
    vendor: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-redux',
        'redux',
      ]
};
const output = {
    path: root,
    filename:'dist/[name].js',
    chunkFilename: 'dist/[name].js',
};
const moduleConfig = {
    rules: [
        {
            test: /\.jsx?$/,
            use:[{
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react','stage-1'],
                    plugins: [
                        ['transform-runtime', {
                            helpers: false,
                            polyfill: false,
                            regenerator: true, }],
                        ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
                    ]
                },
            }]
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.(png|gif|jpg|svg|jpeg)$/i,
            use: ['file-loader?name=./dist/images/[name].[ext]']
        },
      ]
}

module.exports = {
    entry,
    output,
    module:moduleConfig,
    optimization:{
        splitChunks:{name:'vendor'}
    },
    plugins: [
        new ExtractTextPlugin({
            filename:'dist/main.css',
            allChunks:true
        }),
        new HtmlWebpackPlugin({
            title: 'chenwei',
            filename: './index.html',
            template: './src/index.html'
        }),
    ]
}
