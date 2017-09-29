// var http = require('http');
// var fs = require("fs");
// var postHTML;
// fs.readFile('index.html', function (err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   postHTML = data.toString();
// });


// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//   // res.end("2323");
//   res.write(postHTML);
//   res.end();
// }).listen(3001);



var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'F:/JS/NodeJs/hello-typescript/20170923';
// F:/JS/NodeJs/hello-typescript/20170923/index.html
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;
	//var file = url;
    console.log("打开文件的目录" +file);
    //E:/PhpProject/html5/websocket/www/index.html 


    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



}).listen(3001);

console.log('服务器开启成功');