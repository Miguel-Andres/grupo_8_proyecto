var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");
var userController = require("../controllers/userController.js")


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
router.get('/register', userController.registro);


/* GET productDtaile page. */
router.get('/ProductDetail', productController.detalle);

router.post("/productos", function(req, res, next){
  console.log(req.body)
})
module.exports = router;
