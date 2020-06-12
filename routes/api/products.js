var express = require("express")
var router = express.Router()
var productsApiController = require("../../controllers/api/productsController")



router.get("/" , productsApiController.list )

router.post("/" , productsApiController.create )





















module.exports = router