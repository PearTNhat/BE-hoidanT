// get the client
import mysql from 'mysql2/promise'
// const bluebird = require('bluebird');
import bluebird from 'bluebird'
// create the connection to database
const connectionDB= async ()=>{
  const  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',

  });
  return connection
} 

export default connectionDB