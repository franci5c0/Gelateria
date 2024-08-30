const express = require('express'); //importa o framework express

const router = express.Router(); //cria um novo roteador

const saboresController = require('../controllers/saboresController'); //importa o controlador de pedidos

//definindo uma rota para obter todos os pedidos
router.get('/', saboresController.getAllSabores);


//exportando o roteador
module.exports = router;