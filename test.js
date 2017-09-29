var express = require('express');
var fs = require("fs");
var app = express();

app.all('*', function (req, res, next) {      //设置协议头，不然会有跨域的问题
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})


//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
  var inputData = req.query;      //存储前台表单提交的数据
  var fileData;
  //打印inputDate的
  console.log("!!!!收到的数据为" + JSON.stringify(inputData) + "   " + new Date());

  fs.readFile('data.json', function (err, data) {
    if (err) {
      return console.error(err);
    }
    //data是一个Buffer类型，不是Object
    fileData = data.toString();
    // console.log("文件初始内容为" + JSON.parse(fileData).nameList);
    judge();
  });
  function judge() {
    for (var key in JSON.parse(fileData).nameList) {
      // console.log(key + ":" + JSON.parse(fileData).nameList[key]);
      if (inputData.name == key) {
        res.send("1");
        return;
      }
    }
    // console.log(inputData.name +": "+inputData.num); //输出添加的内容
    fileData =  JSON.parse(fileData);
    fileData.nameList[inputData.name] = parseInt(inputData.num);
    // JSON.parse(fileData).nameList[inputData.name] = parseInt(inputData.num);  //这是一种错误的写法，不能更改fileData
    fs.writeFile('data.json',JSON.stringify(fileData), function (err) {
      if (err) {
        return console.error(err);
      }
      res.send("2");
      console.log("数据写入成功！" +fileData + new Date());
    });
  }

});


var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})



