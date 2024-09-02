
const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const pedidosController = require('../controllers/pedidosController'); //importa o controlador de pedidos

//definindo uma rota para deletar um pedido (CARRINHO)
//router.delete('/:id', pedidosController.deleteCarrinho);

//definindo uma rota para adicionar um pedido(CARRINHO)
//router.post('/', pedidosController.addCarrinho);

//definindo uma rota para obter todos os pedidos
//router.get('/', pedidosController.getAllCarrinho);

//exportando o roteador
module.exports = router;