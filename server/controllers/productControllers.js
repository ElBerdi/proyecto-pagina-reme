const {
    conectarDB,
    desconectarDB
} = require("../db/connection");
const Product = require("../db/schemas/productSchema");

const getAll = async (req, res) => {
    try {
        await conectarDB();
        const products = await Product.find({});
        await desconectarDB();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.json({
            message: "no se llamaron a los productos"
        });

    }
}

const create = async (req, res) => {
    try {
        const {modelo,anio,stock,talle,cantidad,precio,equipo,img_url} = req.body;
        await conectarDB();

        const newProduct = new Product ({modelo,anio,stock,talle,cantidad,precio,equipo,img_url});
        await newProduct.save();
        await desconectarDB();
        res.json({message:"Producto guardado"});
    }
    catch (error)
    {
        console.log(error);
        res.json({message:"no se creo nada"});
    }
}

module.exports = {
    getAll,
    create
};