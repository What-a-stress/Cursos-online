# Usa una imagen base con Node.js y npm
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . /app/

# Instala las dependencias
RUN npm ci

# Da permisos de ejecución a tsc
RUN chmod +x ./node_modules/.bin/tsc

# Compila TypeScript a JavaScript
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "dist/server.js"]
