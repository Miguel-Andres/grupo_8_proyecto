const db = require("../../database/models")



let userController = {

list : (req,res,next) => {
  db.user.findAll()
  .then(value => {

      let user = {
          meta :{
              status : 200 ,
              statusText :  " Ok aqui tienes los  productos de Baruk" ,
              url : "api/users" ,
              total : value.length ,
          },
          datos : value
      }
          res.json(user)
  })

},


  create : (req,res) => {
          db.user.create({

            nombre: req.body.name,
            apellido :req.body.lastName,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password,2) ,
            
            })
  }




}

module.exports = userController