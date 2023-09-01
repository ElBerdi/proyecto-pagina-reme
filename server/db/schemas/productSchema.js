const mongoose= require ("mongoose");
const {Schema, model} =mongoose;

const productSchema =new Schema ({
    modelo:string,
    anio:Number,
    stock:Number,
    talle:string,
    cantidad: Number,
    precio: Number,
    equipo: string,
    img_url: string,
});

const product = model ("Product", productSchema);

module.exports= product;