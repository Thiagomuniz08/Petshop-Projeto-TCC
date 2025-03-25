const express = require('express');
const rota = express.Router();

const usu = require('./controllers/usuario'); 

rota.post('/usu', usu.create);
rota.post('/login', usu.login);

module.exports = rota;
