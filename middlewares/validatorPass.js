var {check,validationResult,body} = require("express-validator")


module.exports=[

    check("password","ingrese password mas segura").isLength({min:4}).custom((value,{req}) => {
        if (value !== req.body.confirmpassword) {
            // trow error if passwords do not match
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    })


]