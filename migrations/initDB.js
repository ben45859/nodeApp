const mysql = require('mysql2');
const { config } = require('process');
const util = require('util');

const connection = mysql.createConnection({
  host: config.get('mysql.host'),
  user: config.get('mysql.username'),
  password: config.get('mysql.password'),
  database: config.get('mysql.mydb'),
});

connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);
(async () => {
  try {
    await connection.connect();
    console.log("Connected!");

    await connection.query(`
      CREATE TABLE users (
        id int auto_increment,
        username varchar(255) not null,
        primary key (id)
      )    
    `);
    
    console.log("created table users!");
    
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users_symbols (
        id int auto_increment,
        userid int not null,
        symbol varchar(3) not null,
        primary key (id)
      )    
    `);

    console.log("created table symbols!");

  } catch (e) {
    console.log(e);
  }
})();
