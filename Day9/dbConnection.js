const mysql = require('mysql2');

const dbConfig = {
   host: 'localhost',
   user: 'dev',
   password: 'cometrue',
   port: 3306,
   database: 'musics',
   multipleStatements: true,
};

const pool = mysql.createPool(dbConfig).promise();
module.exports = pool;