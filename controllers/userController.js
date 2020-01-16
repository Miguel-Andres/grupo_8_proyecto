const fs = require("fs") ;
const path = require ("path")
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')


const userController ={

    registro :function(req, res, next) {
        res.render('register', { title: 'registro' })

        console.log(req.body)

    
    },

        ingreso: function(req,res,next){
            console.log(req.body)
            let usuario = req.body
            let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})
            
            let usuarios = JSON.parse(dataUsuarios)
            usuarios.push(usuario)

            fs.writeFileSync(usuariosDatabase, JSON.stringify(usuarios))

            res.send("hola te has registrado") 
        } ,

    login: function(){},


}

module.exports=userController