const sequelize = require("sequelize")
const db = require("../database/models")

const locals = (req,res,next) =>{
    //res locals
    res.locals.isAuthenticated = false ;

    if(req.session.user){
    res.locals.isAuthenticated = true  ;
    res.locals.user = req.session.user
    }
   // else if( req.cookies.rememberToken){
    /* si existe el token en la coleccion es valido
     db.token.findOne({
    where : { token : req.cookies.rememberToken}
    }).then( userToken => {
       
    
        if(userToken){
            //si encontramos un usuario que coincida lo logueamos
            db.user.finOne({
                where :{id : userToken.cliente_id}
            }).then(resultado => {
                if(resultado) {
                  
                    delete user.password;
                    req.session.user = user;
                    res.locals.isAuthenticated = true;
                    res.locals.user = req.session.user;
                }
            })


        }
    
    })
   

    } res.cookie("rememberToken",null,{maxAge : -1})*/

    next()
}





module.exports = locals





