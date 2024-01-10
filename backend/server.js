const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'seu-banco-de-dados'
});

connection.connect();

app.get('/api/dados', (req, res) => {
  connection.query('SELECT * FROM sua_tabela', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});