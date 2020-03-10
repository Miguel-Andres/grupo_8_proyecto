const fs = require("fs") ;
const path = require ("path")
const productDatabase = path.join(__dirname , '../data/product.json')
const models = require("../database/models")


const productController ={

      products :function(req, res, next) {
        models.productos.findAll()
          .then(function(productos){
            res.render('./products/Detail', {productos:productos})
          })
          .catch(err => {
          res.send("hubo un error,intentalo mas tarde")
          })
  },
  
  productId : function(req, res, next){
    models.productos.findByPk(req.params.id)
     .then(function(productos){
       res.render("./products/DetailId", {productos:productos})
     })
   .catch(err => {
       res.send("hubo un error,intentalo mas tarde")
   })


},

       create: function(req, res, next){
        models.productos.findAll()
          .then(function(productos){
            res.render("./products/add",{productos:productos})
          })
          .catch(err => {
           res.send("hubo un error,intentalo mas tarde")
       })
      },


      addProduct: function(req, res, next){            
        models.productos.create({
          nombre: req.body.nombre,
          precio_individual: req.body.precio_individual,
          precio_mediana: req.body.precio_mediana,
          precio_grande: req.body.precio_grande,
          detalle: req.body.detalle,
          producto: req.body.producto,
          categoria:req.body.categoria,
        })
            
             res.redirect("/products")
  },

      
     edit: function(req, res, next){
      models.productos.findByPk(req.params.id)
      .then(function(productos){
        res.render("./products/edit", {productos:productos})
      })
    .catch(err => {
        res.send("hubo un error,intentalo mas tarde")
    })
    }, 


  update: function(req, res, next){
    models.productos.update({
      nombre: req.body.nombre,
      precio_individual: req.body.precio_individual,
      precio_mediana: req.body.precio_mediana,
      precio_grande: req.body.precio_grande,
      detalle: req.body.detalle,
      producto: req.body.producto,
      categoria:req.body.categoria, 

    },  {
      where:{
        id: req.params.id,
      }
      
    });
    res.redirect("/products/" + req.params.id)

  },


  delete: function(req, res, next){
    models.productos.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect("/products");
  },



    car : function(req, res, next){
      models.productos.findByPk(req.params.id)
        .then(function(productos){
         res.render("./products/car", {productos:productos})
        })
        .catch(err => {
         res.send("hubo un error,intentalo mas tarde")
        })

    },


  }
  
  module.exports=productController



  
