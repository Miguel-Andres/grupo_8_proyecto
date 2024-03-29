var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController.js")
const multerProducto = require ("../middlewares/multerProducto")
var { check, validationResult, body } = require('express-validator')
const productsValidator = require ("../middlewares/productsValidator")



/* GET productDtaile page. */
router.get('/', productController.products);

/*====================================================================*/

/* GET add product page. */
router.get('/create', productController.create);

/* Post add product page. */
router.post('/create',  multerProducto, productsValidator, productController.addProduct);

/* GET  product id page. */
router.get('/:id', productController.productId);

/* Actualizaicon */
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', multerProducto ,productsValidator, productController.update);

/* Borrar */
router.delete('/delete/:id', productController.delete);


/* GET add car page. */
router.get('/car/:id', productController.car);


  



module.exports = router;









