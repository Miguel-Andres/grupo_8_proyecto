const path = require("path")
const multer = require("multer")



    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/pizzas')
        },
        filename: function (req, file, cb) {

          nombreProducto = req.body.nombre + '-' + Date.now()+ path.extname(file.originalname) 
          cb(null, nombreProducto)

          
        }
        }) 
        
        
        
         
  var multerAvatar = multer({ storage: storage })

module.exports = multerAvatar.any() 