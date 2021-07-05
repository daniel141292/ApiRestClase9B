const express = require('express');
const RutaDulces = require('./rutas/RutaDulces');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/dulces',RutaDulces);


module.exports = app;