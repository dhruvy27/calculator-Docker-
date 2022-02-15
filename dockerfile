FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY . .
RUN npm i 
EXPOSE 3000
CMD ["npm","start"]