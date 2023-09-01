require ('dontenv').config();
const express =require ('express');
const app = express();
const {conectarDB, desconectarDB}= require("./db/connection");
const product= require
const productosControlador = require ('./server/controllers/controllers/productControllers');

app.get('/api/productos', productosControlador.getAll );

app.post('/api/producto', productosControlador.create );

app.listen (8008, () =>{
    console.log ("corriendo puerto 8008");
});
