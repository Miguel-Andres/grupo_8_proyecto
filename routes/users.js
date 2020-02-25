var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path")
var userController = require("../controllers/userController.js")
const multerAvatar = require ("../middlewares/multerAvatar")

const models = require("../database/models")





/* GET && POST users listing. */
router.get('/profile',  userController.profile  )

router.post("/profile", multerAvatar , userController.profile )

//user profile edit get and post

router.get("/profile/edit" ,userController.edit ) 



// get User List
router.get("/list" , (req,res,next) => {
   models.user.findAll({
    include:[models.avatar]
  })
  .then(resultado =>{
    res.json(resultado)
  }
    )
} )


module.exports = router;
