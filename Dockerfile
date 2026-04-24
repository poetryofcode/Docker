FROM node:18
WORKDIR /app
COPY . .
CMD ["npx", "nodemon", "app.js"]