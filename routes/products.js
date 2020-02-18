var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController.js")



/* GET productDtaile page. */
router.get('/', productController.productos);

/*====================================================================*/

/* GET add product page. */
router.get('/create', productController.formulario);

/* Post add product page. */
router.post('/create', productController.cargaProduct);

/* GET detail product page. */
router.get('/detail', productController.detail);

/* GET detail product id page. */
router.get('/detail/:id', productController.detailId);

/* Actualizaicon */
router.get('/editar/:id', productController.editar);
router.put('/editar/:id', productController.actualizar);

/* Borrar */
router.delete('/borrar/:id', productController.borrar);



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






