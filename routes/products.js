var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController.js")



/* GET productDtaile page. */
router.get('/', productController.products);

/*====================================================================*/

/* GET add product page. */
router.get('/create', productController.create);

/* Post add product page. */
router.post('/create', productController.addProduct);

/* GET  product id page. */
router.get('/:id', productController.productId);

/* Actualizaicon */
router.get('/edit/:id', productController.edit);
router.post('/edit/:id', productController.update);

/* Borrar */
router.post('/delete/:id', productController.delete);


/* GET add car page. */
router.get('/car/:id', productController.car);


  



module.exports = router;


/*
/products/:id (GET)
Detalle de un producto particular
/products/:id/edit (GET)
Formulario de edición de productos
/products/:id (PUT)
Acción de edición (a donde se envía el formulario):
/products/:id (DELETE)
Acción de borrado
*/






