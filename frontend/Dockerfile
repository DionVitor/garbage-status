FROM node:23.3.0-alpine AS build

WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm install

WORKDIR /app
COPY . .

WORKDIR /app/frontend
EXPOSE 3000
CMD ["npm", "start"]
