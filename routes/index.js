var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController.js")
const path = require('path');
var {check,validationResult,body} = require("express-validator")
var fs = require("fs")

const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*====================================================================*/

/* POST HOME LOGGIN */
router.post("/",userController.login)

/* GET add car page. */
router.get('/carProduct', function(req, res, next) {
  res.render('./products/carProduct', { title: 'litle car' });
});

/*====================================================================*/
/* GET register page y POST */


router.get('/register', userController.registro);



let validator = require('../middlewares/validator')

router.post("/register", validator, userController.crear)







module.exports = router;



