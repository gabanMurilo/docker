const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Importe o body-parser
const { Pool } = require('pg'); // Importe a classe Pool do pacote 'pg'

// Configurações do banco de dados
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Crie uma instância do Pool com as configurações do banco de dados
const pool = new Pool(dbConfig);

// Middleware para analisar o corpo da solicitação POST
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para o formulário de cadastro de usuário
app.get('/form', (req, res) => {
  // Lógica para renderizar o formulário HTML
  res.send(`
    <html>
      <body>
        <form action="/registered" method="POST">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br>
          <input type="submit" value="Adicionar Usuário">
        </form>
      </body>
    </html>
  `);
});

// Endpoint para adicionar um usuário ao banco de dados
app.post('/registered', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'Requisição inválida' });
    }

    const { nome, email } = req.body;

    // Lógica para adicionar o usuário ao banco de dados
    const query = 'INSERT INTO users (nome, email) VALUES ($1, $2)';
    const values = [nome, email];
    await pool.query(query, values);

    res.send('Usuário adicionado ao banco de dados');
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
});

app.use((req, res) => {
  const welcomeMessage = 'O site do container { GATEWAY } está rodando!';
  res.send(welcomeMessage);
});

const port = 2000;
app.listen(port, () => {
  console.log(`Gateway listening on port ${port}`);
});
