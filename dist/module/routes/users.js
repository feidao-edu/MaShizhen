"use strict";
var express_1 = require("express");
var router = express_1.Router();
router.get('/add', function (req, res) {
    res.send(req.query);
});
module.exports = router;
