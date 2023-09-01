const {conectarDB,desconectarDB} = require("../db/connection");
const Pedido = require("../db/schemas/pedidosSchema");


const getAll = async (req, res) => {
    try {
        await conectarDB();
        const pedidos = await Pedido.find({});
        await desconectarDB();
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        res.json({
            message: "no se llamaron a los pedidos"
        });

    }
};

const create = async (req, res) => {
    try {
        const {nombre,apellido,direccion,altura,precio} = req.body;
        await conectarDB();

        const newPedido = new Pedido ({nombre,apellido,direccion,altura,precio});
        await newPedido.save();
        await desconectarDB();
        res.json({message:"Pedido guardado"});
    }
    catch (error)
    {
        console.log(error);
        res.json({message:"no se creo nada en pedidos"});
    }
};

module.exports = {
    getAll,
    create
};