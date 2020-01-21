var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController.js")
var productController = require("../controllers/productController.js")
const path = require('path');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*====================================================================*/

/* GET productDtaile page. */
router.get('/productDetail', productController.detalle);


/*====================================================================*/
/* GET add car page. */
router.get('/carProduct', function(req, res, next) {
  res.render('carProduct', { title: 'litle car' });
});

/*====================================================================*/
/* GET register page. */
router.get('/register', userController.registro);

/*POST register page*/

router.post("/register", userController.ingreso)







module.exports = router;



