# Use uma imagem de node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências do gateway
RUN npm install

# Copie os arquivos JavaScript do gateway para o container
COPY gateway.js ./

# Exponha a porta 80 para o gateway
EXPOSE 80

# Comando para iniciar o gateway
CMD ["node", "gateway.js"]
