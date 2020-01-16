const userController ={

    registro :function(req, res, next) {
        res.render('register', { title: 'registro' })

        console.log(req.body)

    
    },

        ingreso: function(req,res,next){
            console.log(req.body)

            res.send("hola te has registrado") 
        } ,

    login: function(){},


}

module.exports=userController