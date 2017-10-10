import * as  express from 'express';
import * as bodyParser from 'body-parser'
// var bodyParser = require('body-parser');
var app = express();
// json类型body
app.use(bodyParser.json());
// query string类型body
app.use(bodyParser.urlencoded({
    extended: false
}));
// 静态文件目录
app.use(express.static(__dirname + '../public'));
// 路由与业务逻辑
app.use('/user', require('../routes/users.js'));
app.listen(80);
