var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Березы*/
router.get('/bereza', function(req, res, next) {
  res.send("<h1>Страница Березы</h1>")
});

/* Страница Дуба*/
router.get('/dub', function(req, res, next) {
  res.send("<h1>Страница Дуба</h1>")
});

/* Страница Сосны*/
router.get('/sosna', function(req, res, next) {
  res.send("<h1>Страница Сосны</h1>")
});

module.exports = router;
