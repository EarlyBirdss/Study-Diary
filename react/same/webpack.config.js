var path = require("path");

var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");

// 一些常用路由
/***
 * path.resolve([from...], to)
 * form: 原路径，
 * to:   将被解析到绝对路径的字符串
 */
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, "app");
const BUILD_PATH = path.resolve(ROOT_PATH, "build");

module.exports = {
    entry: path.resolve(APP_PATH, "index.jsx"),
    output: {
        path: BUILD_PATH,
        filename: "bundle.js",
    },
    // 开启webpack source map
    devtool: "eval-source-map",
    // 开启webpack dev server
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8080,
        // progress: true
    },

    // 配置plugin
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin("iconfont/iconfont.js"), // xlink方式引入iconfont
        // new HtmlwebpackPlugin({
        //  title: "SAME"
        // })
    ],

    module: {
        // 配置 preLoaders, 将eslint 添加进入
        // preloaders: [],
        // 配置loader, 将Babel 添加进去
        // loaders: [{
        //     test: /\.jsx?$/,
        //     loader: "babel-loader",
        //     exclude: "node_modules",
        //     include: APP_PATH
        // }, {
        //     test: /\.less/,
        //     exclude: "node_modules",
        //     include: APP_PATH,
        //     loader: "style!css!autoprefixer!less",
        //     // loaders: ["style", "css", "autoprefixer", "less"]

        // }, ]
        rules: [{
            test: /\.less$/,
            use: [
                "style-loader",
                "css-loader",
                "autoprefixer-loader",
                "less-loader"
            ]
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
                "autoprefixer-loader"
            ]
        }, {
            test: /\.jsx$/,
            loader: "babel-loader"
        }]
    }
}