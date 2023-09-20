CREATE DATABASE IF NOT EXISTS dbname;

USE dbname;

CREATE TABLE newsletter_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO newsletter_users (name, email) VALUES
  ('exemplo', 'exemplo@gmail.com'),
  ('vasco', 'vasco@yahoo.com');
