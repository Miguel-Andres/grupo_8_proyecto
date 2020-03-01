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

    crear: function(req,res,next){
        console.log(validationResult(req))
        let errors = validationResult(req)

        if(errors.isEmpty()){



         db.user.create({
           nombre: req.body.name,
            apellido :req.body.lastName,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password,2) ,
            
         }) 
         res.render("users/register" ,{save: true})
        }else{
           return res.render("users/register",{errors : errors.errors ,save : false})
        }

                
                   
             
        },
            

     login: function(req,res,next) {



        db.user.findAll(value)
         .then(
             usuarios => {
                let user = usuarios.find(function (usuario) {
                    return req.body.email == usuario.email && bcrypt.compareSync(req.body.password, usuario.password)
                })
        
                if (user) {
                    return res.redirect(301,"/users/profile" ,{title : "profile"})            
                } 
                
                return res.send("el usuario no existe")
             }

            )   


        
       

         
        
        },

           
        
    
 
       


    profile : function (req,res,next){

        res.render( "users/profile")
        

    } ,

    edit : (req,res,next)=>{

        res.render("users/Edit")
    },

    

   



  




}


module.exports=userController