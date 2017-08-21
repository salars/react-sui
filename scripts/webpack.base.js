const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const APP_PATH = path.resolve(__dirname + "/../");
const APP_DIR = APP_PATH+"/app";
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: APP_PATH + "/app/app.js",
        polyfill:['babel-polyfill'],
        react: ['react', 'react-dom','react-router'],
    },
    output: {
        path: APP_PATH + "/dist",
        filename: "[name].js"
    },
    resolve: {
        alias:{
            root:APP_DIR,
            components:APP_DIR+'/components',
            views:APP_DIR+'/views',
            lib:APP_DIR+"/lib",
            config:APP_DIR+"/config.js",
            css:APP_DIR+"/css",
            constants:APP_DIR+"/constants.js",
            "react-sui":APP_PATH+"/src"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon:'./scripts/favicon.ico',
            title: "联盟证券",
            template: APP_PATH + "/scripts/index.html"
        }),
        //new webpack.ProvidePlugin({ })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.join(__dirname, '../app'),path.join(__dirname,'../src')],
                loader: 'babel-loader'
            },
            {
                test: /\.(svg|ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2|swf)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
};
