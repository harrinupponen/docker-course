# Dockerfile for docker-project Weatherapp web application

# Add a base image to build this image off of
FROM node:latest

#Set working directory
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

#Copy ALL the files with . . "notation"
COPY . .

# Add a default port containers from this image should expose
EXPOSE 8000

# Add a default command for this image
CMD ["npm", "start"]