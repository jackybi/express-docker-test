#!/bin/sh
npm install
db-migrate up
#nodemon
pm2-runtime bin/www
