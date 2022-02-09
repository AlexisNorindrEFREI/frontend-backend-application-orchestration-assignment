FROM node:latest
WORKDIR /usr/src/app/back
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server" ]
