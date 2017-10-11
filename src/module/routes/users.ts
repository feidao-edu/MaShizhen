import { Router } from 'express';
const router = Router();

router.get('/add', function (req, res) {
	res.send(req.query);
});


export default router;
// export = (()=>{
// 	return router;
// })
