var { check, validationResult, body } = require('express-validator')
const models = require("../database/models")
const productsValidator = 

  [ check("categoria").isLength({min: 1}).withMessage("Debe completar campo"),
    check("nombre").isLength({min: 1}).withMessage("Debe completar campo"),
    check("precio_individual").isInt({min: 3}).withMessage("Campo numérico"),
    check("precio_mediana").isInt({min: 3}).withMessage("Campo numérico"),
    check("precio_grande").isInt({min: 3}).withMessage("Campo numérico"),
    check("detalle").isLength({min: 1}).withMessage("Debe completar campo"),
    check("producto").isLength({min: 1}).withMessage("Debe completar campo"),
    /*body("nombre").custom(function(value) {
          models.productos.findAll() 
    
          .then(function(productos){
            if (producto.nombre == value) {
            
              return false;
            }
            return true;  
         })
     }).withMessage("Nombre ya existente"),
     */
     
    
   ]


    module.exports= productsValidator