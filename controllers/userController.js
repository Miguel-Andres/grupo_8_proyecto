const fs = require("fs") ;
const path = require ("path")
const sequelize = require("sequelize")
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')
const {check ,validationResult, body}= require("express-validator")
const bcrypt = require("bcrypt")
const db = require("../database/models")


const userController = {

    registro :function(req, res, next) {
        res.render('users/register', { title: 'registro', save: false })

        console.log(req.body)

    
     },

    crear: function(req,res){
        console.log(validationResult(req))

         db.user.create({
           nombre: req.body.name,
            apellido :req.body.lastName,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password,2) ,
            
         }) 

         res.redirect("users/list")


        
           
          


           
                
                   
             
        },
            

    login: function(req,res,next) {
        let dataUsuarios = fs.readFileSync(usuariosDatabase,{encoding:"utf-8"})

        let usuarios = JSON.parse(dataUsuarios)

        let user = usuarios.find(function (usuario) {
            return req.body.email == usuario.email && bcrypt.compareSync(req.body.password, usuario.password)
        })

        if (user) {
            return res.redirect(301,"/users/profile" ,{title : "profile"})            
        } 
        
        return res.send("el usuario no existe")
    },


    profile : function (req,res,next){

        res.render( "users/profile")
        

    } ,

    edit : (req,res,next)=>{

        res.render("users/Edit")
    },

    

   



  




}


module.exports=userController