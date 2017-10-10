import * as  express from 'express';
import * as my from './routes/users'
// var bodyParser = require('body-parser');
var app = express();
// 静态文件目录
app.use(express.static(__dirname + '/../public'));
// res.sendFile('/ok.js', { root: __dirname + '/../../public' });
// 路由与业务逻辑
app.use('/user', my);
app.listen(80);
