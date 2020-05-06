FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install

COPY *.* ./

EXPOSE 3333

CMD [ "npm", "start" ]