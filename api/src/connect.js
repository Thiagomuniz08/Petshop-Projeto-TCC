const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'petshop'
});

module.exports = con;