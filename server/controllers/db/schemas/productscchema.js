const mongoose= require ("mongoose");
const {schemas, model} =mongoose;

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

const productos_schema = model ("Product", productSchema);

module.exports={
    productos_schema
};