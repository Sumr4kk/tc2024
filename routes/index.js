var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Березы*/
router.get('/bereza', function(req, res, next) {
  res.render('forest', {
    title: "Береза",
    picture: "images/bereza.jpg",
    desc: "Береза - это лиственное дерево или кустарник из семейства березовых, с характерной белой или серой корой, заостренными листьями и зелеными листьями летом, которые приобретают желто-золотистый оттенок осенью."
  });
});
  

/* Страница Дуба*/
router.get('/dub', function(req, res, next) {
  res.render('forest', {
    title: "Дуб",
    picture: "images/dub.jpg",
    desc: "Дуб - крупное дерево с прочным древесиной и характерными листьями, широко используемое в различных отраслях благодаря своей прочности и долговечности."
  });
});

/* Страница Сосны*/
router.get('/sosna', function(req, res, next) {
  res.render('forest', {
    title: "Сосна",
    picture: "images/sosna.jpg",
    desc: "Сосна - высокое хвойное дерево с характерными игловидными листьями, используемое в лесном хозяйстве и строительстве благодаря прочной древесине."
  });
});

module.exports = router;
