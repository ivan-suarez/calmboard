FROM node:16
#Create app directory
WORKDIR /home
#Install app dependencies

COPY package*.json ./src/* ./

RUN npm install

#Bundle app source
COPY . .
RUN ls

EXPOSE 3000 
CMD ["npm","start"]