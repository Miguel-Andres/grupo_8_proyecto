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

/* GET productDtaile page. */
router.get('/ProductDetail', productController.detalle);

<<<<<<< HEAD
router.post("/productos", function(req, res, next){
  console.log(req.body)
})
=======



/*====================================================================*/
/* GET register page. */
router.get('/register', userController.registro);

/*POST register page*/

router.post("/register", userController.ingreso)







>>>>>>> bda50430e36117d36e8d2cf9a8b737c64bd77b40
module.exports = router;



