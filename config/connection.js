const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'2526147480123aCB$',
    database:'pizzas_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: " + connection.threadId);
});

module.export = connection;