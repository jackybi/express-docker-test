const mysql = require('mysql')
var dbConfig = require('./DBConfig');
const pool = mysql.createPool( dbConfig.mysql )

let query = function( sql, values, connection = null ) {
  return new Promise(( resolve, reject ) => {
    if (connection == null){
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    } else {
      connection.query(sql, values, ( err, rows) => {
        if ( err ) {
          reject( err )
        } else {
          resolve( rows )
        }
      })
    }
  })
}

let begin = function () {
  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.beginTransaction(function (err) {
          if (err) {
            connection.release()
            reject(err)
          } else {
            resolve(connection)
          }
        })
      }
    })
  })
}

let end = function (connection) {
  return new Promise(( resolve, reject )=> {
    connection.commit(err => {  //事务处理函数resolve则提交事务
      if(err) {
        reject(err)
      }else {
        resolve(connection)
      }
    })
  })
}

let rollback = function (connection) {
  return new Promise(( resolve, reject )=> {
      connection.rollback(() => {  //事务处理函数reject则回滚事务
      connection.release()
    })
  })
}

const knex = require('knex')({
  client: 'mysql',
  connection: dbConfig.mysql
});
module.exports = { query,knex,begin,end,rollback}