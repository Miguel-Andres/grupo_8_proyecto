const fs = require("fs") ;
const path = require ("path")
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')
const {check ,validationResult, body}= require("express-validator")
const bcrypt = require("bcrypt")

const userController = {

    registro :function(req, res, next) {
        res.render('register', { title: 'registro',save: false })

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

          
                    usuarios.push(usuario)

                    fs.writeFileSync(usuariosDatabase, JSON.stringify(usuarios))
        
                    res.render("register" ,{save: true})
                    
         }/*else del if error*/ else{
                return res.render("register", {errors : errors.errors , save : false})
            }
                   
             
        } ,

    login: function(req,res,next) {
        let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})

        let usuarios = JSON.parse(dataUsuarios)

        let user = usuarios.find(function (usuario) {
            return req.body.email == usuario.email && bcrypt.compareSync(req.body.password, usuario.password)
        })

        if (user) {
            return res.redirect(301,"/users/profile")            
        } 
        
        return res.send("el usuario no existe")
    },


    profile : function (req,res,next){
        

    } ,

    edit : (req,res,next)=>{

        res.render("userEdit")
    }



  




}


module.exports=userController