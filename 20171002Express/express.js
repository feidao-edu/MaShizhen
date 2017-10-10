var express = require("express");
var http = require("http");

var app = express();

app.use('/static', express.static('a'));        //"http://localhost:1337/static/b.txt"这样可以访问a文件夹里面的文件
http.createServer(app).listen(1337);            