FROM node:18-alpine as build

WORKDIR /app

#COPY package*.json .
COPY . .

RUN npm install
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.21.4-alpine

USER nginx

EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html