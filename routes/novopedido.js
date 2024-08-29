const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const novopedidoController = require('../controllers/novopedidoController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', novopedidoController.getAllNovopedido);

//definindo uma rota para adicionar um novo pedido
router.post('/', novopedidoController.addNovopedido);

//adicionando um novo pedido no histórico
router.post('/', novopedidoController.addPedidos);

//exportando o roteador
module.exports = router;