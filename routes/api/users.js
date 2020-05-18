var express = require("express")
var router = express.Router()
var userApiController = require("../../controllers/api/userController")
var db = require("../../database/models")


router.get("/" , function(req,res) {

   /* db.user.findAll({
        include:[models.token]
      })
     .then(function(resultado) {

        let prueba = {
            meta : {
                status:200,
                
                url: "/api/users"
            },
            data: resultado


        },
       res.send(prueba) */
       
   
})
    


module.exports = router ;