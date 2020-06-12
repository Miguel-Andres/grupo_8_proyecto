
let db = require("../../database/models")

const productsController ={

    list : (req,res,next) => {
        db.productos.findAll()
        .then(value => {

            let products = {
                meta :{
                    status : 200 ,
                    statusText :  " Ok aqui tienes los  productos de Baruk" ,
                    url : "api/products" ,
                    total : value.length ,
                },
                datos : value
            }
                res.json(products)
        })

    },

    create : (req,res,next) => {

        db.productos.create({

          nombre: req.body.nombre,
          precio_individual: req.body.precio_individual,
          precio_mediana: req.body.precio_mediana,
          precio_grande: req.body.precio_grande,
          detalle: req.body.detalle,
          producto: req.body.producto,
          categoria: req.body.categoria,  
               
        })    
             res.json({
                 status : 200 ,
                 
             })
        }




    



}




module.exports = productsController ;