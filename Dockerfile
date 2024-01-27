FROM node:20-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "start" ]