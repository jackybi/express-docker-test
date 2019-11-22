FROM node:current-alpine

WORKDIR /app
COPY . /app
EXPOSE 3000
RUN chmod +x Docker/startdev.sh
CMD ["Docker/startdev.sh"]