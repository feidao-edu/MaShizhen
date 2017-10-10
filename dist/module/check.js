"use strict";
/**
 * 读文件模块，还没有写完
 */
var fs = require("fs");
var file = "";
fs.readFile(file, function (err, data) {
    if (err) {
        return -1;
    }
    else {
        return data;
    }
});
module.exports = fs;
