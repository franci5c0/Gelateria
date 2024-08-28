const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const pedidosController = require('../controllers/pedidosController'); //importa o controlador de pedidos


//definindo uma rota para obter todos os pedidos
router.get('/', pedidosController.getAllPedidos);


//exportando o roteador
module.exports = router;