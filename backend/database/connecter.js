const mysql = require("mysql");
const cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "fcb",
});

module.exports = cnx;
