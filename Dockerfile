FROM node:5

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install

CMD ["npm", "start"]
