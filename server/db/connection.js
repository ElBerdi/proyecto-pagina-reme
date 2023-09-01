const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log ("conectado a db");
    }
    catch (error)
    {
        console.log (error);
    }
};

const desconectarDB = async () => {
    try {
        await mongoose.disconnect();
        console.log ("desconectado a db");
    }
    catch (error)
    {
        console.log (error);
    }
};

module.exports= {
    conectarDB,
    desconectarDB
};