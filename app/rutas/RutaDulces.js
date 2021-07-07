const { Router } = require('express');
const router = Router();
const ControladorDulces = require('../controlador/ControladorDulces');

router.get('/',ControladorDulces.index )
       .post('/',ControladorDulces.agregar)
       .get('/:key/:value',ControladorDulces.buscar,ControladorDulces.mostrar);

module.exports=router;