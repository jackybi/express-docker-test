const config = require('dotenv').config().parsed
module.exports =
    {
      mysql: {
        // host: '192.168.1.189',
        host : process.env.MYSQL_DB_HOST,
        user: process.env.MYSQL_DB_USER,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
      }
    };