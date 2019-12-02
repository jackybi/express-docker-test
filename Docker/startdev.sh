#!/bin/sh
npm install
npm install -g pm2
npm install -g db-migrate
db-migrate up
pm2-runtime bin/www
