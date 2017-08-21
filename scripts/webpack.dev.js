const base = require('./webpack.base.js');
const webpack = require('webpack');
const port = 8001;
base.devtool = "eval-source-map";
base.output.publicPath = "/";

base.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'react',  'polyfill'],
        minChunks: Infinity,
        filename: 'assets/[name].chunk.js'
    })
);

base.module.loaders.push({
    test: /\.less$/,
    loader: "style-loader?convertToAbsoluteUrls!css-loader?sourceMap!less-loader?sourceMap"
});


module.exports = base;