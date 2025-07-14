FROM node:18-alpine

WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Instala todas las dependencias
RUN npm ci

# Copia el código fuente
COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

# Construye la aplicación TypeScript
RUN npm run build

# Expone el puerto (Railway usa PORT de variable de entorno)
EXPOSE $PORT

# Comando para ejecutar la aplicación
CMD ["npm", "start"]