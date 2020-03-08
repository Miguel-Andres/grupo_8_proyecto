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
        let errors = validationResult(req)

        console.log('errores de validacion', errors)

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

        db.user.findOne({
            where : {email:req.body.email}
        })
        .then(function(user){
            
            if(user){
                if( bcrypt.compareSync(req.body.password, user.password)){
                    //login correcto

                    //limpiar los datos que no queremos en session puedo sen muchos 
                    delete user.password

                    // creamos usuario session  
                    req.session.user = user

                    // creamos usuarios en locals
                    // req.locals.user = req.session.user
                    
                    return res.redirect("/users/profile" )
                } else {
                    res.send("No existe la contraseña")
                }
            } else {
                res.send("el usuario no existe")
            }
        })
   
        
        },

        logaout : (req,res)=> {

            req.session.destroy()
            res.redirect("/")
        },

           
       


    profile : function (req,res,next){
        console.log('sesion', req.session)

        res.render( "users/profile", {
            user: req.session.user
        } )
    } ,

    profileEdit : (req,res,next)=>{

        res.render("users/Edit")
    },

    edit:(req,res,next)=>{
        console.log('session', req.session.user)

        db.user.update({
            nombre: req.body.name,
            apellido :req.body.lastName,
            pais : req.body.pais ,
            ciudad : req.body.ciudad ,
            direccion :req .body.direccion ,
            //password : bcrypt.hashSync(req.body.password,2),
         },{
            where:{
              id: req.session.user.id,
            }
          })
          let user =req.session.user
        
          res.redirect("/users/profile" ,{user :user})
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