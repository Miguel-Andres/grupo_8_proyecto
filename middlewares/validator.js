var {check,validationResult,body} = require("express-validator")
const fs = require("fs")
const path = require ("path") ;
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')
const db = require("../database/models")
const sequelize = require("sequelize")


module.exports = [
    check("email", "ingrese un email valido" ).isEmail(),
    /*.custom(value => {
      db.user.email.findAll(value)
      .then( value =>{ 
      if(value == db.user.email){
        return false
      }{
        return true ;
      }
      })

    }).withMessage("usuario ya existente"),*/
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











 

