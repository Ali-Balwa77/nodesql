var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword",
  database: "Akbar"
});

con.connect(function(err) {
  if (err) err;
  console.log("Connected!");
  con.query("CREATE DATABASE Akbar", function (err, result) {
    if (err) err;
    console.log("Database created");
  });
  var sql = "CREATE TABLE customers(name VARCHAR(200)), address(name VARCHAR(200))";
  con.query(sql, function (err, result) {
    if (err) err;
    console.log("Table created");
  });
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err)  err;
    console.log("1 record inserted");
  });
  con.query("SELECT name, address customers", function (err, result, fields) {
    if (err)  err;
    console.log(result);
  });
  con.query("SELECT name, address customers WHERE address = 'Highway 37'", function (err, result) {
    if (err)  err;
    console.log(result);
  });
  var sql = "DELETE FROM customers WHERE address = 'Highway 37'";
  con.query(sql, function (err, result) {
    if (err)  err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
