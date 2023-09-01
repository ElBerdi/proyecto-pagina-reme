const { create } = require("handlebars");

const getAll = async (reque,res) => {
    res.json({message:"Las remeras"});
}

const Create = async (reque,res) => {
    res.json({message:"Creando camiseta"});
}

module.exports= {
    getAll,
    create
};