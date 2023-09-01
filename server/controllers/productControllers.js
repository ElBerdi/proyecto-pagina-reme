const { conectarDB, desconectarDB }= require("../db/connection");
const Product = require("../db/schemas/productSchema");

const getAll = async (req,res) => {
    try
    {
        await conectarDB();
        const products = await Product.find({});
        await desconectarDB();
        res.json(products);
    } catch (error)
    {
        console.log (error);
        res.json({message:"no se llamaron a los productos"});
        
    }
}
const create = async (req,res) => {
    res.json({message:"Creando camiseta"});
}

module.exports= {
    getAll,
    create
};