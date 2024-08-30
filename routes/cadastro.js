const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const cadastroController = require('../controllers/cadastroController.js'); //importa o controlador de pedidos


//definindo uma rota para obter todos os pedidos
router.get('/', cadastroController.getAllCadastro);


//exportando o roteador
module.exports = router;