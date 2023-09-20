# Usa a imagem oficial Node.js como base
FROM node:14

# Diretorio padrão do container
WORKDIR /gateway

# Copia o package para o container
COPY package*.json ./

# Instalação de dependências
RUN npm install

# Copia os demais codigos para o container
COPY . .

# Porta que a aplicação utilizará
EXPOSE 3000

# comando para iniciar a aplicação
CMD ["node", "app.js"]
