var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET add product page. */
router.get('/addProduct', function(req, res, next) {
  res.render('addProduct', { title: 'product' });
});

/* GET add car page. */
router.get('/carProduct', function(req, res, next) {
  res.render('carProduct', { title: 'litle car' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'registro' });
});

/* GET productDtaile page. */
router.get('/ProductDetail', function(req, res, next) {
  res.render("productdetail", { title: 'menu' });
});

module.exports = router;
