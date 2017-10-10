/**
 * 读文件模块，还没有写完
 */

import * as fs from 'fs';
import * as http from 'http'

const file = "";
fs.readFile(file, function (err, data) {
    if (err) {
        return -1;
    } else {
        return data;
    }
});

export = fs;