# Use a imagem oficial do mysql como base
FROM mysql:latest

# Defina as variáveis de ambiente para criar o banco de dados e usuário
ENV mysql_USER=user
ENV mysql_PASSWORD=password
ENV mysql_DB=mydb

# Copie o arquivo init.sql para um diretório temporário dentro do contêiner
COPY init.sql /tmp/init.sql

# Execute o init.sql durante a construção da imagem
RUN cat /tmp/init.sql | psql -U "mysql_USER" -d "mysql_DB"

# Limpe o arquivo temporário
RUN rm /tmp/init.sql
