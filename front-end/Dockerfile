FROM node:14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

COPY ./build /app/build

EXPOSE 3000

CMD ["npm", "start"]
