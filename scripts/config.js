let appConfig = require("../app/config");
let API_PREFIX = appConfig.API_PREFIX;
const path = require('path');
module.exports = {
    DEV_SERVER_PORT: 8001,
    //PROXY_HOST:"https://test3.meiguwang.cn/",
    //  PROXY_HOST:"https://aassdd.leaguetrade.com/",
    PROXY_HOST:"https://test2.meiguwang.cn/",
    mock:false,
    urlHandler(req){
        if(req.url.indexOf("/ltapi")>-1){
            return req.url;
        }
       let url = req.url.slice(API_PREFIX.length);
       if(url.indexOf(".")>-1){
           return url;
       }
       return url;
    },
    mockerCallback(req,res){
       let url = req.url;
       if(url.indexOf(".") === -1){
           url = url + ".json";
       }
       res.sendFile(path.resolve(__dirname+"/../api"+url));
    }
};
