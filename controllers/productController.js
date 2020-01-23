const fs = require("fs") ;
const path = require ("path")
//const productDatabase = path.join(__dirname , '..','data','product.json')


const productController ={

      detalle :function(req, res, next) {
        res.render('productDetail', { title: 'menu' })
        

    },


      formulario :function(req, res, next) {
        res.render('addProduct', { title: 'formulario' })
         console.log(req.body)
    },


    cargaProduct: function(req,res,next){
      let product = req.body;

      let dataProduct = fs.readFileSync("product.json",{encoding:"utf-8"});
      let products;
        if (dataProduct == "") {
        products = [];
        } else {
        products = JSON.parse(dataProduct);
        }
        
      products.push(product);
      
      productJson = JSON.stringify(products);
      fs.writeFileSync("product.json", productJson)
      res.send("el producto ha sido cargado")
    } ,

    
  }
  
  module.exports=productController
 




          //cargaProduct: function(req,res,next){
              
           // let product = req.body
           // let dataProduct = fs.readFileSync(productDatabase,{encoding:"utf-8"})
              
            //  let products = JSON.parse(dataProduct)
            // products.push(product)
  
            // fs.writeFileSync(productDatabase, JSON.stringify(products))
  
             //res.send("el producto ha sido cargado") 
            //} ,