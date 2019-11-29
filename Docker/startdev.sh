#!/bin/sh
npm install
db-migrate up
pm2-runtime ../bin/www
