const db = require('../config/db'); //importa a conexão com o banco de dados


//função para obter todos os pedidos
const getAllPedidos = (req, res) => {
    db.query('SELECT * FROM pedidos', (err, results) => {

        if (err) {
            console.error('Erro ao obter os pedidos', err);
            res.status(500).send('Erro ao obter os pedidos');
            return;
        }
        res.json(results);
    });
};


module.exports = {
getAllPedidos
};