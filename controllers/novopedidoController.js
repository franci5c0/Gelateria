const db = require('../config/db'); //importa a conexão com o banco de dados

//função para obter todos os pedidos
const getAllNovopedido= (req, res) => {
    db.query('SELECT * FROM novopedido', (err, results) => {

        if (err) {
            console.error('Erro ao obter os sabores')
            res.status(500).send('Erro ao obter os sabores');
            return;
        }
        res.json(results);
    });
};




// Função para adicionar um novo pedido 
const addNovopedido = (req, res) => { 
    const {id, nome_sabor, quantidade, preço} = req.body; 
    db.query(
      'INSERT INTO novopedido (id, sabor_descrição, quantidade, preço) VALUES (?, ?, ?, ?)', 
      [id, nome_sabor, quantidade, preço], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao adicionar o pedido:', err); 
          res.status(500).send('Erro ao adicionar o pedido'); 
          return; 
        } 
        res.status(201).send('pedido adicionado com sucesso'); 
      } 
    ); 
  }; 


  // FUNÇÃO PARA ADICIONAR UM NOVO PEDIDO NO HISTÓRICO
const addPedidos = (req, res) => { 
    const {id, nome_sabor, quantidade, preço} = req.body; 
    db.query(
      'INSERT INTO pedidos (id, sabor, preço, quantidade) VALUES (?, ?, ?, ?)', 
      [id, nome_sabor, quantidade, preço], 
      (err, results) => { 
        if (err) { 
          console.error('Erro ao adicionar o pedido:', err); 
          res.status(500).send('Erro ao adicionar o pedido'); 
          return; 
        } 
        res.status(201).send('pedido adicionado com sucesso'); 
      } 
    ); 
  }; 


module.exports = {
getAllNovopedido,
addNovopedido,
addPedidos
};