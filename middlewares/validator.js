var {check,validationResult,body} = require("express-validator")
const fs = require("fs")
const path = require ("path") ;
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')


module.exports = [
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
  ]