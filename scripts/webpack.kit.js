const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const APP_PATH = path.resolve(__dirname + "/../");
const APP_DIR = APP_PATH+"/app";
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const exec = require('child_process').execSync;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

exec("rm -rf build/");

module.exports = {
    entry: {
        app: APP_PATH + "/src/index.js",
    },
    output: {
        path: APP_PATH + "/build",
        filename: "index.js",
        publicPath: "/"
    },
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
            },
            {
                test: /\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader!less-loader"
                })
            }
        ]
    },
    plugins:[
        new ProgressBarPlugin({complete:"|"}),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            quiet:true
        }),
        /*
        new UglifyJSPlugin({
            compress: {warnings:false},
            minimize: true,
            comments: false,
            sourceMap:false,
            output:{
                source_map:false,
                comments:false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['index'],
            minChunks: Infinity,
        }),
         */
    ]
};
