#!/bin/sh
npm config set registry https://registry.npm.taobao.org
npm install
db-migrate up
#nodemon
pm2-runtime bin/www
