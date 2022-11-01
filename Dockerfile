FROM node:18-alpine

WORKDIR /home/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]