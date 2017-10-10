"use strict";
// import express = require('express');
var express_1 = require("express");
// console.log("answer = " + answer);
var router = express_1.Router();
router.all('/list', function (req, res) {
    console.log(req.query);
    res.send(JSON.stringify(req.query) + "answer");
});
// router.get('/:id', function(req, res) {
// 	// rest风格
// 	console.log(req.params.id);
// 	res.send('ok');
// });
router.get('/fb', function (req, res) {
    res.status(403).send('^_^ forbidden!   answer = ' + "answer");
});
router.get('/tt', function (req, res) {
    res.contentType('application/javascript');
    res.sendFile('/ok.js', { root: __dirname + '/../../public' });
});
router.get('/mm', function (req, res) {
    res.json({ a: 1, b: [true, 'ok'] });
});
module.exports = router;
