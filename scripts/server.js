'use strict';
const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');
const devConfig = require('./config');
const appConfig = require('../app/config');
const proxy = require('express-http-proxy');
const compression = require('compression');
const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const port = devConfig.DEV_SERVER_PORT;
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
const prefix = appConfig.API_PREFIX;

function liveLoad(path){
    delete require.cache[ require.resolve(path)];
    return require(path);
}

let prefixMatchHandler = null;
let configPath = path.resolve(__dirname+"/config");
if(!devConfig.mock){
   prefixMatchHandler = proxy(function(){
       let  devConfig = liveLoad(configPath);
       return devConfig.PROXY_HOST;
   },{
       memoizeHost: false,
       forwardPath: function (req, res) {
           let  devConfig = liveLoad(configPath);
           return devConfig.urlHandler(req,res);
       },
       intercept: function (rsp, data, req, res, callback) {
           let strData = data.toString('utf8');
           if(res._headers['set-cookie']){
               let cookieInfo = res._headers['set-cookie'][0];
               let arrCookieInfo = cookieInfo.split(";");
               let newArrCookieInfo = arrCookieInfo.map(function(item){
                   if(item.toLowerCase().indexOf("path")!== -1){
                       return "path=/";
                   }
                   return item;
               });
               let newStrCookieInfo = newArrCookieInfo.join(";");
               res.header("Set-Cookie",newStrCookieInfo);
               res.header("Content-Type","application/json");
           }
           callback(null, strData);
       },
   });
    app.all(new RegExp(`(${prefix}.*)|(/ltapi.*)`),prefixMatchHandler);
}else{
    app.use(prefix, function(req,res){
        let devConfig = liveLoad("./config");
        devConfig.mockerCallback(req,res);
    });
}

app.get('*', (req, res) => {
    devMiddleWare.waitUntilValid(() => {
        const html = mfs.readFileSync(file);
        res.end(html);
    })
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
