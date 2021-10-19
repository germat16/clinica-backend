const mysql = require('mysql');

let conectarDB = (host, user, password, database) => {
   var conn =  mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    })
    return conn
}
module.exports = {conectarDB}