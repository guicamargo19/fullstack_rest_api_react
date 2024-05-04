FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY . .

# nodemon para alteração hot reload
RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "start"]
