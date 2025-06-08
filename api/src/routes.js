const express = require('express');
const rota = express.Router();

const usu = require('./controllers/usuario');
const produto = require('./controllers/produto');

// Rotas de usuário
rota.post('/usuarios', usu.create);
rota.post('/login', usu.login);

// Rotas de produto
rota.post('/produtos', produto.create);
rota.get('/produtos', produto.listar); 

module.exports = rota;
