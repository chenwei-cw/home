const ExtractTextPlugin = require('extract-text-webpack-plugin'); //将css单独打包一个文件
const path = require('path');
const root = path.resolve(__dirname, '../');

const entry = {
    index:root+'/src/js/index.js',
    vendor: ['react','react-router-dom','react-redux','redux']
};
const output = {
    path: root+'/dist',
    filename: '[name].js'
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
                        ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
                    ]
                },
            }]
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
            use: ['file-loader?name=./dist/images/[name].[ext]']
        },
      ]
}

module.exports = {
    entry,
    output,
    module:moduleConfig,
    plugins: [
        new ExtractTextPlugin({
            filename:'main.css',
            allChunks:true
        })
    ]
}
