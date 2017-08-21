const path = require("path");
const ICON_DIRECTORY = path.join( __dirname,"../icon" );
const filePath = path.resolve(ICON_DIRECTORY);
const fs = require('fs');
const exportFilePath = path.join(filePath,"../app/lib/icon.js");
let obj = {};

fs.readdir(filePath+"/svg",function(err,files){
    if(err){
        return;
    }

    files.forEach(function(filename){
        if(! /.*\.svg$/.test(filename)){
            return;
        }
        const fullPath = path.join(filePath+"/svg",filename);
        const str = doWithFile(fullPath);
        const key = filename.slice(4,-4);
        obj[key] = str;
    });
    const strJson = JSON.stringify(obj);
    const fileContent = "module.exports = "+strJson+";";
    fs.writeFile(exportFilePath,fileContent);
});

function doWithFile(fullPath){
    const content = fs.readFileSync(fullPath,'utf-8');
    const newContent = content.replace(/[\r\n\t]/g,"");
    const matches =newContent.match(/<path.*\sd="([^"]*)".*>/);
    return matches[1];
}



