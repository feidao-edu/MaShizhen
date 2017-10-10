var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'F:/JS/GitHub/Public/MaShizhen/20170929';
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



}).listen(3000);

console.log('服务器开启成功');