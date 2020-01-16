var express = require('express');
var router = express.Router();
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
router.get('/ProductDetail', function(req, res, next) {
  res.render("productdetail", { title: 'menu' });
});




/*====================================================================*/
/* GET register page. */
router.get('/register', userController.registro);

/*POST register page*/

router.post("/register", userController.ingreso)







module.exports = router;



