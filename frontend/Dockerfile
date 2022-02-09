FROM node:latest
WORKDIR /usr/src/app/front
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
