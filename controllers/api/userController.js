const db = require("../../database/models")



let userController = {

list : function(req,res){

    db.user.findAll({
        include:[models.token]
      })
     .then(resultado => {
       let respuesta = resultado
       res.send(respuesta)
       })
},




}

module.exports = userController