FROM node:8.0

# App directory where the source code lives
WORKDIR /server

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD ["npm","start"]