var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Face Analysis'});
});

router.get('/faceDetection/', function(req, res, next) {
  res.render('faceDetection', {title:'Face Detection'});
});

router.get('/faceExpression/', function(req, res, next) {
  res.render('faceExpression', {title:'Face Expression'});
});

router.get('/ageAndGender/', function(req, res, next) {
  res.render('ageAndGender', {title:'Age and Gender Detection'});
});


module.exports = router;
