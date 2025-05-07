const express = require('express');
const rota = express.Router();

const usu = require('./controllers/usuario'); 

rota.post('/usuarios', usu.create); // Rota para cadastro
rota.post('/login', usu.login); // Rota para login

module.exports = rota;
