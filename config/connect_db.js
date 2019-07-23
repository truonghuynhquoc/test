var mysql = require('mysql');
console.log('Get connection ...');
 
module.exports = new mysql.createConnection({
  database: 'node_login',
  host: "localhost",
  user: "root",
  password: "",
  port: "3303"

});