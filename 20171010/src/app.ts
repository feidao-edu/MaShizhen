import * as  express from 'express';
// var bodyParser = require('body-parser');
var app = express();
// 静态文件目录
app.use(express.static(__dirname + '../public'));
// 路由与业务逻辑
app.use('/user', require('../routes/users.js'));
app.listen(80);
