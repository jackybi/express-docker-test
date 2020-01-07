FROM node:current-alpine

RUN npm config set registry https://registry.npm.taobao.org && npm install -g pm2 && npm install -g nodemon && npm install -g db-migrate
WORKDIR /app
COPY . /app
EXPOSE 3000
RUN chmod +x Docker/startdev.sh
CMD ["Docker/startdev.sh"]