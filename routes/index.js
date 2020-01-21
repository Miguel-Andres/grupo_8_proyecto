var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");
var userController = require("../controllers/userController.js")
var {check,validationResult,body} = require("express-validator")
var fs = require("fs")
var path =require ("path")

const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

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

/* GET productDtaile page. */
router.get('/ProductDetail', productController.detalle);

router.post("/productos", function(req, res, next){
  console.log(req.body)
})



/*====================================================================*/
/* GET register page. */
router.get('/register', userController.registro);

/*POST register page*/

router.post("/register", [
  check("email", "ingrese un email valido" ).isEmail(),
  body("email").custom( value =>{ 
    let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})
    let usuarios = JSON.parse(dataUsuarios)
    for (let i= 0; i<usuarios.length ; i++){
      if(usuarios[i].email == value){
        return false ;
      }
    }
    return true ;

  }).withMessage("usuario ya existente"),
  check("name", "nombre invalido").isLength({min:1}),
  check("lastName" ,"Apellido invalido").isLength({min:1}),
  check("password","ingrese clave valida" ).isLength({min:3}).custom((value,{req, loc, path}) => {
    if (value !== req.body.confirmpassword) {
        // trow error if passwords do not match
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),
  

  
  

 
], userController.ingresoDatos)







module.exports = router;



