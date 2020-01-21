const fs = require("fs") ;
const path = require ("path")
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')
const {check ,validationResult, body}= require("express-validator")
const bcrypt = require("bcrypt")








const userController = {

    registro :function(req, res, next) {
        res.render('register', { title: 'registro' })

        console.log(req.body)

    
     },

    ingresoDatos: function(req,res,next){
           console.log(validationResult(req))

           let errors = validationResult(req)


            if (errors.isEmpty()){
                
              
           
            let usuario ={
                name : req.body.name,
                lastName :req.body.lastName,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.password,2) ,
                confirmpassword : req.body.confirmpassword,
            }
            let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})
            
            let usuarios = JSON.parse(dataUsuarios)

            for ( let i = 0 ; i < usuarios.length ;i++ ){
                if (req.body.email == usuarios[i].email){
                    res.render("register")
                    return ;
                }
            }
                    usuarios.push(usuario)

                    fs.writeFileSync(usuariosDatabase, JSON.stringify(usuarios))
        
                    res.render("register" ,{ Bienvenido : req.body.name})
                    
         }/*else del if error*/ else{
                return res.render("register", {errors : errors.errors})
            }
                   
             
        } ,

    login: function(req,res,next){
       
        

        let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})

        let usuarios = JSON.parse(dataUsuarios)
        

        for (var i = 0 ; i < usuarios.length ;i++){

            if (req.body.email == usuarios[i].email &&  req.body.password == usuarios[i].confirmpassword){ 
            
                res.render("userProfile")
                return;
            
            } else {
                res.send("el usuario no existe")
                return ;
            }
        }

        


        

        

       },


}

module.exports=userController