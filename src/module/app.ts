import * as  express from 'express';
import router from './routes/users';

router();
(() => {
	const app = express();
	// 静态文件目录
	app.use(express.static(__dirname + '/../../public'));
	// 路由与业务逻辑
	app.use('/user', router);
	app.listen(8080);
})()
