# Use uma imagem de node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie os arquivos JavaScript do aplicativo para o container
COPY app.js ./

# Exponha a porta 8080 para o aplicativo
EXPOSE 8080

# Comando para iniciar o aplicativo
CMD ["node", "app.js"]
