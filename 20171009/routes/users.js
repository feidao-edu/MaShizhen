"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var answer = ZipCodeValidator_1.add(1, 8);
console.log("answer = " + answer);

var express = require('express');
var router = express.Router();

router.all('/list', function(req, res) {
	console.log(req.query);
	res.send(JSON.stringify(req.query) +answer);
});

// router.get('/:id', function(req, res) {
// 	// rest风格
// 	console.log(req.params.id);
// 	res.send('ok');
// });

router.get('/fb', function(req, res) {
	res.status(403).send('^_^ forbidden!'+answer);
});

router.get('/tt', function(req, res) {
    res.contentType('application/javascript');
	res.sendFile('/ok.js', {root: __dirname + '/../public'});
});

router.get('/mm', function(req, res) {
	res.json({a:1, b:[true, 'ok']});
});

module.exports = router;


