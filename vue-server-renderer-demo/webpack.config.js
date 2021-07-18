const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        "built-server-bundle":"./src/entry-server.js",
        "built-client-bundle":"./src/entry-client.js",
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './',
        libraryTarget:'umd',
        libraryExport:'default',
        globalObject: 'this'
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                      }
                }
            },
            {
                test:/\.vue$/,
                include: [
                    path.resolve(__dirname, "./src"),
                ],
                exclude: /node_modules/,
                use:'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
              }
        ]
    },
    plugins: [
        // 此插件会把js文件通过script src的方式加到html中
        // new HtmlWebpackPlugin({
        //   template: './src/template.html'
        // }),
        new VueLoaderPlugin()
    ]

}