var {check,validationResult,body} = require("express-validator")
 

module.exports=[
    check("name", "nombre invalido").isLength({min:1}),
    check("lastName" ,"Apellido invalido ").isLength({min:1}),
    check("pais","Completar campos :").isLength({min:1}),
    check("ciudad","Completar campos :").isLength({min:1}),
    check("direccion","Completar campos :").isLength({min:1}),

]