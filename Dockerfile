# Use a imagem oficial do Node.js com a versão 20
FROM node:20

# Crie um diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o restante do código da aplicação
COPY . .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 5173

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
