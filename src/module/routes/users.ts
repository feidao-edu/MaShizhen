import { Router } from 'express';
var router = Router();

router.get('/add', function (req, res) {
	res.send(req.query);
});


export = router;
// export = (()=>{
// 	return router;
// })
