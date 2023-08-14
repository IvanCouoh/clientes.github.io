const { getConnection } = require("../database/database");

const home = (req, res) => {
    res.send('HOLA, INICIO');
}

const getCustomer = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM clientes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCustomer = async (req, res) => {
    try {
        const cliente_json = req.body;
        const custReport = { cliente_json }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET cliente_json=?", JSON.stringify(custReport.cliente_json));

        console.log('custReport: ', custReport);
        console.log('result: ', result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error);
    }
};

module.exports = {
    home,
    getCustomer,
    addCustomer
};