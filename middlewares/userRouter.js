const guest = (req,res,next) =>{

    if(!res.locals.isAuthenticated){
        return res.redirect("/products")
        
    }

    next()
}
module.exports = guest