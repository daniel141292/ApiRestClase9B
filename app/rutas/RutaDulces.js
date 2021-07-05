const { Router } = require('express');
const router = Router();
const ControladorDulces = require('../controlador/ControladorDulces');

router.get('/',ControladorDulces.index )
       .post('/',ControladorDulces.agregar);

module.exports=router;