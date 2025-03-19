const express = require('express');
const rota = express.Router();

const usu = require('./controllers/Usuario');

rota.post('/usu', usu.create);
rota.post('/login', usu.login);

module.exports = rota;