var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path")

const multerAvatar = require ("../middlewares/multerAvatar")





/* GET && POST users listing. */
router.get('/profile', function(req, res, next) {
  res.render('userProfile');
});

router.post("/profile", multerAvatar , (req,res,next) => {
  console.log(req.body.name)
  res.render("userprofile")
})

module.exports = router;
