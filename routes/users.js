var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path")
var userController = require("../controllers/userController.js")
const multerAvatar = require ("../middlewares/multerAvatar")

let userRouter = require("../middlewares/userRouter")
const models = require("../database/models")
let validatorPass = require("../middlewares/validatorPass")
let validatorEdit = require("../middlewares/validatorEdit")





/* GET && POST users listing. */
router.get('/profile', userRouter, userController.profile  )

router.post("/profile/avatar", multerAvatar , userController.profileAvatar )

//user profile edit get and post

router.get("/profile/edit" ,userController.profileEdit ) 

router.post("/profile/editdata",validatorEdit, userController.edit)




router.put("/profile/editpass",validatorPass,userController.editPass)

router.delete("/profile/delete",userController.delete)


/*------logaout*--*/
router.get('/logout', userController.logout)

// get User List
router.get("/lista" , function(req,res,next) {
  models.token.findAll({
    include :[ models.user],
  })
 .then(resultado => {
   res.json(resultado)
  
   })
})

 // get token list

 router.get("/listatoken" , function(req,res,next) {
  models.user.findAll({
    include:[models.token]
  })
 .then(resultado => {
   res.json(resultado)
   })
})

 module.exports = router;
