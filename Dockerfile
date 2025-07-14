COPY . /app/.
RUN npm ci
RUN chmod +x ./node_modules/.bin/tsc
RUN npm run build
