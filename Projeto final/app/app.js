var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2/promise');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Cria uma conexão mysql
var pool = mysql.createPool({
  host: 'mysql-container', 
  user: 'dbuser',
  password: 'dbpassword',
  database: 'dbname',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// GET /users endpoint para returnar uma lista de usuarios
app.get('/users', function(req, res) {
  pool.query('SELECT * FROM newsletter_users')
    .then(function(rows) {
      res.json(rows[0]);
    })
    .catch(function(error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// POST /users endpoint para criar um novo usuário
app.post('/users', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  pool.query('INSERT INTO newsletter_users (name, email) VALUES (?, ?)', [name, email])
    .then(function() {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch(function(error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// POST /newsletter endpoint para enviar uma mensagem newsletter
app.post('/newsletter', function(req, res) {
  var message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  pool.query('SELECT name, email FROM newsletter_users')
    .then(function(rows) {
      res.json({ users: rows[0], message: message });
    })
    .catch(function(error) {
      console.error('Error sending newsletter:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(PORT, function() {
  console.log('Server is running on port ' + PORT);
});