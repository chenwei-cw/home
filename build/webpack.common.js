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
    path: root+'/dist',
    filename:'[name].js',
    chunkFilename: '[name].js',
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
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: [
            //         'less-loader',
            //         'css-loader',
            //         'autoprefixer-loader'
            //     ]
            // })
        },
        {
            test: /\.(png|gif|jpg|svg|jpeg)$/i,
            use: ['file-loader?name=/images/[name].[ext]']
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
            filename:'main.css',
            allChunks:true
        }),
        new HtmlWebpackPlugin({
            title: 'chenwei',
            filename: './index.html',
            template: root+'/src/html/template.html'
        }),
    ]
}
