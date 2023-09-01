const express =require ('express');
const app = express();
const productosControlador = require ('./server/controllers/productControllers');

app.get('/api/productos', productosControlador.getAll );

app.post('/api/producto', productosControlador.create );

app.listen (8008, () =>{
    console.log ("corriendo puerto 8008");
});
