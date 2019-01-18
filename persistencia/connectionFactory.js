const mysql = require('mysql');

createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'j0nas',
        database: 'payfast'
    });
}

module.exports = () => {
    return createDBConnection;
}