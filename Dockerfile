FROM node:18-alpine

WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Copia el schema de Prisma primero
COPY prisma ./prisma/

# Instala todas las dependencias
RUN npm ci

# Da permisos de ejecución a los binarios de node_modules
RUN chmod +x node_modules/.bin/*

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