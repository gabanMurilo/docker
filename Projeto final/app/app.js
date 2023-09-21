const express = require('express');
const app = express();
const { Pool } = require('pg'); // Importe a classe Pool do pacote 'pg'

// Configurações do banco de dados
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const pool = new Pool(dbConfig);

// Endpoint para /users
app.get('/users', async (req, res) => {
  try {
    // Consulta SQL para buscar todos os usuários
    const query = 'SELECT id, nome, email FROM users';
    
    // Execute a consulta usando o pool
    const result = await pool.query(query);

    // Envie a lista de usuários como resposta
    res.json({ users: result.rows });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Endpoint para /newsletter
app.get('/newsletter', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    
    const result = await pool.query(query);

    const message = req.query.message || 'Mensagem padrão se nenhuma mensagem for especificada';

    res.json({ users: result.rows, message });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.use((req, res) => {
  const welcomeMessage = 'O site do container { APP } está rodando!';
  res.send(welcomeMessage);
});

const port = 1000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
