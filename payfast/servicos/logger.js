var winston = require('winston');

// var logger = new winston.Logger({

module.exports = winston.createLogger({
    // format: winston.format.json(),
    // level: 'info',
    // format: winston.format.json(),
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: "logs/payfast.log",
            maxsize: 1000,
            maxFiles: 10
        })
    ]
});