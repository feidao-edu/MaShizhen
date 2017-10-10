"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var my = require("./routes/users");
var app = express();
// 静态文件目录
app.use(express.static(__dirname + '/../../public'));
// 路由与业务逻辑
app.use('/user', my);
app.listen(8080);
