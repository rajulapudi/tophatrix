var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/contact', function (req, res, next) {
	res.render('contact', { title: 'Express' });
});
router.get('/careers', function (req, res, next) {
	res.render('careers', { title: 'Express' });
});

module.exports = router;
