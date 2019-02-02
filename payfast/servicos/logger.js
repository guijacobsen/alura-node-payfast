var winston = require('winston');

// var logger = new winston.Logger({

var logger = winston.createLogger({
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

// logger.log('Log utilizando o winston');
logger.log('info', 'Log especificando o nivel');
logger.info('Logger utilizando logger.info()');