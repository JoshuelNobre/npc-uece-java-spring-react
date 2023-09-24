# Use uma imagem base Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do diretório atual para o contêiner
COPY . .

# Construa a aplicação React
RUN npm run build

# Expõe a porta onde a aplicação React estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
