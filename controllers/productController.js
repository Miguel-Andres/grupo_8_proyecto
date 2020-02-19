const fs = require("fs") ;
const path = require ("path")
const productDatabase = path.join(__dirname , '../data/product.json')
const models = require("../database/models")


const productController ={

      productos :function(req, res, next) {
        res.render('productDetail', { title: 'menu' })
        

    },

    
    formulario :function(req, res, next) {
      res.render('addProduct', { title: 'formulario'}) 
      console.log(req.body)
    },

    cargaProduct: function(req,res,next){
       let product = req.body;
       let dataProduct = fs.readFileSync(productDatabase,{encoding:"utf-8"})
    
       let products = JSON.parse(dataProduct)
         products.push(product)
  
        fs.writeFileSync(productDatabase, JSON.stringify(products))
  
        res.redirect("/products/create") 
   },
   
       detail :function(req, res, next) {
        models.productos.findAll()
        .then(function(productos){
          res.render("listadoDeProductos", {productos:productos})
        })

            .catch(err => {
                res.send("hubo un error,intentalo mas tarde")
            })
  },

       detailId : function(req, res){
           models.productos.findByPk(req.params.id)
            .then(function(productos){
              res.render("listaDetalleId", {productos:productos})
            })
          .catch(err => {
              res.send("hubo un error,intentalo mas tarde")
          })
  
    
  },
  editar :function(req, res, next) {
  },
  actualizar :function(req, res, next) {
  },
  borrar :function(req, res, next) {
  }


  }
  
  module.exports=productController



  
  /**/




   /*  
    cargaProduct: function(req,res,next){
    
      let product = {
        categoria: req.body.categoria ,
        nombre: req.body.nombre ,
        pequeña: req.body.pequeña ,
        mediana: req.body.mediana ,
        grande: req.body.grande ,
        detalles: req.body.detalles ,
        producto: req.body.producto ,
        idProducto: req.body.idProducto ,
      }
      let dataProduct = fs.readFileSync(productDatabase,{encoding:"utf-8"})
    
     let products = JSON.parse(dataProduct)
       products.push(product)

      fs.writeFileSync(productDatabase, JSON.stringify(products))

      res.send("el producto ha sido cargado") 
    
    } */