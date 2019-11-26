const config = require('dotenv').config().parsed
module.exports =
    {
      mysql: {
        // host: '192.168.1.189',
        host : config.MYSQL_DB_HOST,
        user: config.MYSQL_DB_USER,
        password: config.MYSQL_DB_PASSWORD,
        database: config.MYSQL_DB_NAME,
      }
    };