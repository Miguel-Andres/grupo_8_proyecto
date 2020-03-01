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

/* GET detail product page. */
router.get('/detail', productController.detail);

/* GET detail product id page. */
router.get('/detail/:id', productController.detailId);

/* Actualizaicon */
router.get('/edit/:id', productController.edit);
router.post('/edit/:id', productController.update);

/* Borrar */
router.post('/delete/:id', productController.delete);



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






