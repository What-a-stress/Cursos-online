FROM node:18-alpine

WORKDIR /app

# Instala TypeScript globalmente
RUN npm install -g typescript

# Copia archivos de dependencias
COPY package*.json ./

# Copia el schema de Prisma primero
COPY prisma ./prisma/

# Instala todas las dependencias
RUN npm ci

# Genera el cliente de Prisma
RUN npx prisma generate

# Copia el resto del código fuente
COPY . .

# Construye la aplicación TypeScript
RUN npm run build

# Expone el puerto
EXPOSE $PORT

# Comando para ejecutar la aplicación
CMD ["npm", "start"]