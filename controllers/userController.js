const fs = require("fs") ;
const path = require ("path")
const sequelize = require("sequelize")
const usuariosDatabase = path.join(__dirname , '../data/usuarios.json')
const {check ,validationResult, body}= require("express-validator")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const db = require("../database/models")


const userController = {

    registro :function(req, res, next) {
        res.render('users/register', { title: 'registro', save: false })

        console.log(req.body)

    
     },

    crear: function(req,res,next){
        let errors = validationResult(req)

        console.log( errors)

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

                   if (req.body.remember){
                       const token = crypto.randomBytes(64).toString("base64")
                       res.cookie("rememberToken",token,{maxAge :1000*60*60*24*90})
                       db.token.create({
                           cliente_id: user.id ,
                           token : token
                       })

                   }
                    return res.redirect("/users/profile" )
                    } else {
                    res.send("No existe la contraseña")
                }
            } else {
                res.send("el usuario no existe")
            }
        })
   
        
        },

        logout : (req,res)=> {

            req.session.destroy()
            res.redirect("/")
        },

           
       


    profile : function (req,res){
        console.log('sesion', req.session)

            res.render( "users/profile", {
            user: req.session.user
        } )
    } ,

    profileAvatar : function (req,res){
        console.log('sesion', req.session)

        db.user.update({

            imagen: req.files[0].filename,
            
        },{
            where:{
              id: req.session.user.id,
            }
        })

      return res.redirect("/users/profile")
    },

    profileEdit : (req,res)=>{

        res.render("users/edit.ejs" ,{
            user: req.session.user
        })
    },

    edit:(req,res)=>{
        /*console.log('session', req.session.user)*/

        let errorsEdit = validationResult(req)
        console.log('Problemas al actualizar datos', errorsEdit)

        if(errorsEdit.isEmpty()){

            db.user.update({

                nombre: req.body.name,
                apellido :req.body.lastName,
                pais : req.body.pais ,
                ciudad : req.body.ciudad ,
                direccion :req .body.direccion ,
                
             },{
                where:{
                  id: req.session.user.id,
                }
            })
              
            
             return res.redirect("/users/profile")

        }{
            return res.render("users/edit" , {errors: errorsEdit.errors ,  user: req.session.user})
        }

        
        },

        editPass:(req,res)=>{
            console.log( "Actualizo pass el cliente : " , req.session.user.id)

            let errors = validationResult(req)
            console.log('errores de validacion', errors)

            if(!errors.isEmpty()){

                return res.render("users/edit" , {errors : errors.errors})

            }else{
                db.user.update({
                    password : bcrypt.hashSync(req.body.password,2)
                    },{
                        where : { id : req.session.user.id} 
                    })
                    
        
                   return res.redirect("/users/profile")

            }


           

        },

        delete: (req,res,next)=>{

            db.user.destroy({
                where : {id : req.session.user.id} ,

                

            })
            .then(()=> res.redirect("/"))
            .catch(e => console.log(e))

        
            

        },

      

       /* avatar : (req,res,next) =>{

            db.avatar.create({
                cliente_id : req.session.user.id ,
                
            })
            res.render( "users/profile", {
                user: req.session.user
            } )
        },*/
    
        




}


module.exports=userController