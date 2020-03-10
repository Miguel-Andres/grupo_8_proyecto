var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path")
var userController = require("../controllers/userController.js")
const multerAvatar = require ("../middlewares/multerAvatar")
let validator = require('../middlewares/validator')

const models = require("../database/models")





/* GET && POST users listing. */
router.get('/profile',  userController.profile  )

router.post("/profile", multerAvatar , userController.profile )

//user profile edit get and post

router.get("/profile/edit" ,userController.profileEdit ) 

router.post("/profile/edit",validator, userController.edit)

router.delete("/delete",userController.delete)


/*------logaout*--*/
router.get('/logout', userController.logout)

// get User List
router.get("/list" , (req,res,next) => {
   models.user.findAll({
    include:[models.avatar]
  })
  .then(resultado =>{
    res.json(resultado)
  }
    )
}
)

 module.exports = router;
