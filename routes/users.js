var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path")

const multerAvatar = require ("../middlewares/multerAvatar")

const models = require("../database/models")





/* GET && POST users listing. */
router.get('/profile', function(req, res, next) {
  res.render('userProfile');
});

router.post("/profile", multerAvatar , (req,res,next) => {
  console.log(req.body.name)
  res.render("userprofile")
})

// get User List
router.get("/list" , (req,res,next) => {
  models.user.findAll()
  .then(resultado =>{
    res.json(resultado)
  }
    )
})


module.exports = router;
