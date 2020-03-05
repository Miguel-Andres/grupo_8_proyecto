const sequelize = require("sequelize")
const db = require("../database/models")

const locals = (req,res,next) =>{
//res locals

res.locals.isAuthenticated = false ;

if(req.session.user){
    res.locals.isAuthenticated = true  ;
    res.locals.user = req.session.user
}

next()
}





module.exports = locals