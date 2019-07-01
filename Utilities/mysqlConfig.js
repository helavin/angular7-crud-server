var config = require("../Utilities/config").config;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.DB_URL_MYSQL.host, // 'localhost',
    user: config.DB_URL_MYSQL.user, // 'root', // , 'oneloveb_myloveU'
    password: config.DB_URL_MYSQL.password, // 'P@ssw0rd040618', // , 'P@ssw0rd'
    database: config.DB_URL_MYSQL.database //'demo_angular7_crud' //  'oneloveb_mylove_db' // 'usersdb'
});

connection.connect(() => {
    require('../Models/Article').initialize();
});



let getDB = () => {
    // console.log(connection)
    return connection;
}

module.exports = {
    getDB: getDB
}
