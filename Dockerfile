FROM node:16

WORKDIR /app

ENV PORT 3000

ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start"]