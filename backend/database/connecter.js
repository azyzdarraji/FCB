const mysql = require("mysql");

function _connect() {
    const cnx = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fcb",
    });
    cnx.connect((err) => {
        if (err) {
            throw err;
        } else {
            console.log("Connected to data base");
        }
    });
    return cnx;
}
module.exports = _connect();
