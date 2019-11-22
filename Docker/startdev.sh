#!/bin/sh
npm install
npm install -g nodemon
db-migrate up
nodemon
