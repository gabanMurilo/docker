# Utiliza imagem base mysql:latest
FROM mysql:latest

# Variaveis de ambiente para configuracao do banco de dados
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=dbname
ENV MYSQL_USER=dbuser
ENV MYSQL_PASSWORD=dbpassword

# copiar o script de inicializacao do banco de dados
COPY ./init.sql /docker-entrypoint-initdb.d/
