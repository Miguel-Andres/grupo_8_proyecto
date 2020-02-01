var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController.js")
var productController = require("../controllers/productController.js")
const path = require('path');
var {check,validationResult,body} = require("express-validator")
var fs = require("fs")


const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*====================================================================*/

/* GET productDtaile page. */
router.get('/productDetail', productController.detalle);

/* POST HOME LOGGIN */
router.post("/",userController.login)

/* GET add product page. */
router.get('/addProduct', function(req, res, next) {
  res.render('addProduct', { title: 'product' });
});
router.post("/addproduct",function(req,res){
  res.send("hola tu producto fue cargado")
})

/* GET add car page. */
router.get('/carProduct', function(req, res, next) {
  res.render('carProduct', { title: 'litle car' });
});

/*====================================================================*/
/* GET register page. */
router.get('/register', userController.registro);

/*POST register page*/

let registerValidator = require('../middlewares/validator')

router.post("/register", registerValidator, userController.ingresoDatos)







module.exports = router;



