'use strict';
const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');
const proxy = require('express-http-proxy');
const compression = require('compression');
const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
webpackConfig.entry.app = [
    `webpack-hot-middleware/client`,
    webpackConfig.entry.app
];

const compiler = webpack(webpackConfig);

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    }
});
app.use(compression());
app.use(devMiddleWare);
app.use(require('webpack-hot-middleware')(compiler));
const mfs = devMiddleWare.fileSystem;
const file = path.join(webpackConfig.output.path, 'index.html');


let prefixMatchHandler = null;

app.get('*', (req, res) => {
    devMiddleWare.waitUntilValid(() => {
        const html = mfs.readFileSync(file);
        res.end(html);
    })
});

// *********************
// const app1 = express();
// app1.get('/test', (req, res, next) => {
//     console.log(req);
//      res.send("query: "+ req.query.name);
// });
//
// app1.listen(9001, () => {
//     console.log(`Listening at http://localhost:${9001}`);
// });

const port = 9000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
