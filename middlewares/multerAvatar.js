const path = require("path")
const multer = require("multer")



    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/avatar')
        },
        filename: function (req, file, cb) {

          nombreAvatar = req.session.user.nombre + '-' + Date.now()+ path.extname(file.originalname) 
          cb(null, nombreAvatar)

          
        }
        }) 
        
        
        
         
  var multerAvatar = multer({ storage: storage })

module.exports = multerAvatar.any() 