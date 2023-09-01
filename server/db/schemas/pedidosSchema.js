const mongoose= require ("mongoose");
const {Schema, model} =mongoose;

const pedidoSchema = new Schema ({
    nombre:String,
    apellido:String,
    direccion:String,
    altura:Number,
    precio:Number
});


const pedido = model ("pedido", pedidoSchema);

module.exports=pedido;