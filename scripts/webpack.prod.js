const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const exec = require('child_process').execSync;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
exec("rm -rf dist/");
base.output.publicPath = "/";
base.plugins.push(
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
        name: ['router','app','react','polyfill'],
        minChunks: Infinity,
        filename: 'assets/scripts/[name].[chunkhash].chunk.js'
    }),
    new ExtractTextPlugin("assets/styles/[name].[contenthash].css")
);
base.module.loaders.push({
        test: /\.less$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:"css-loader!less-loader"
        })
    });
module.exports = base;