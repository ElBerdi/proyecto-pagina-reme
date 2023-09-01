require ('dotenv').config();
const express =require ('express');
const app = express();
const productosControlador = require ('./server/controllers/productControllers');
const pedidosControlador = require ('./server/controllers/pedidosControllers');

app.use (express.json());

app.get('/api/productos', productosControlador.getAll );
app.post('/api/producto', productosControlador.create );

app.get('/api/pedidos', pedidosControlador.getAll );
app.post('/api/pedido', pedidosControlador.create );



app.listen (8008, () =>{
    console.log ("corriendo puerto 8008");
});
