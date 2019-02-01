const mysql = require('mysql');

createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'j0nas',
        database: 'payfast',
        // port: 3306,
        // insecureAuth: true
    });
}


// var connString = 'mysql://root:j0nas@localhost/mdb?charset=utf8_general_ci';
// con = mysql.createConnection(connString);

module.exports = () => {
    return createDBConnection;
}