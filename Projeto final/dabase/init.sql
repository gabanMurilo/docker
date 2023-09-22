CREATE TABLE if not exists users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);


INSERT INTO users (nome, email) VALUES
  ('Exemplo', 'ex1@email.com');