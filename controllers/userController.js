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
                 
              }).then() 



         
         res.render("users/register" ,{save: true})
        }else{
           return res.render("users/register",{errors : errors.errors ,save : false})
        }

                
                   
             
        },
            

     login: function(req,res,next) {

        db.user.findOne({
            where : {email:req.body.email}
        })
        .then(function(user){
            
            if(user){
                if( bcrypt.compareSync(req.body.password, user.password)){
                    return res.redirect(301,"/users/profile" )
                } else {
                    res.send("No existe la contraseña")
                }
            } else {
                res.send("el usuario no existe")
            }
        })



        
        

         /*.then(
             usuarios => {
                let user = usuarios.find(function (usuario) {
                    return req.body.email == user.email && bcrypt.compareSync(req.body.password, db.user.password)
                })
        
                if (user) {
                    return res.redirect(301,"/users/profile" ,{title : "profile"})            
                } 
                
                return res.send("el usuario no existe")
             }

            )*/   


        
       

         
        
        },

           
        
    
 
       


    profile : function (req,res,next){

        res.render( "users/profile")
        

    } ,

    profileEdit : (req,res,next)=>{

        res.render("users/Edit")
    },

    edit:(req,res,next)=>{
        db.user.update({
            nombre: req.body.name,
            apellido :req.body.lastName,
          password : bcrypt.hashSync(req.body.password,2) ,
            
         })

        },

        delete: (req,res,next)=>{
            db.user.destroy({
               where :{
                   id : req.session.id
               }
            })
            res.redirect("/", {msg: "el usuario fue borrado"})

        },
    
          

    

   



  




}


module.exports=userController