var mysql = require("mysql");
var myLocalHost = {
  host: "localhost",
  user: "root",
  password: "(root)",
  database: "burgers_db"
}
var myRemoteHost = {
  host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "rt6qvjiml0tip8vb",
  password: "kszp9mljsftkk1v9",
  database: "eblxhenbsa13yhe9"
}

// var connection = mysql.createConnection(myLocalHost);
// var connection = mysql.createConnection(process.env.JAWSDB_URL || myLocalHost);
// var connection = mysql.createConnection(myRemoteHost);
var connection = mysql.createConnection(process.env.JAWSDB_URL || myLocalHost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
