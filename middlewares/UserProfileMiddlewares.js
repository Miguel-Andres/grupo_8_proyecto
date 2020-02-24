
const fs = require ("fs")

function UserProfileMiddlewares (req,res,next){
    console.log(req.body.name)

    res.render("userProfile")

}


module.exports = UserProfileMiddlewares