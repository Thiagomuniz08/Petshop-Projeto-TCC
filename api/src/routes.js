const express = require('express');
const rota = express.Router();

const usu = require('./controllers/Usuario');

rota.post('/usu', usu.create);

module.exports = rota;