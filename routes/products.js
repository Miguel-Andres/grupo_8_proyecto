var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController.js")



/* GET productDtaile page. */
router.get('/', productController.detalle);

/*====================================================================*/

/* GET add product page. */
router.get('/create', productController.formulario);
router.post('/create', productController.cargaProduct);

/* Post add product page. */





/*
/products (GET)
Listado de productos
/products/:id (GET)
Detalle de un producto particular
/products/create (GET)
Formulario de creación de productos
/products (POST)
Acción de creación (a donde se envía el formulario)
/products/:id/edit (GET)
Formulario de edición de productos
/products/:id (PUT)
Acción de edición (a donde se envía el formulario):
/products/:id (DELETE)
Acción de borrado
*/




module.exports = router;

