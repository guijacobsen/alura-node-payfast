var winston = require('winston');
var formatL = winston.format;
// var logger = new winston.Logger({

module.exports = winston.createLogger({
    // format: winston.format.json(),
    // level: 'info',
    // format: winston.format.json(),
    // format: formatL.combine(
    //     formatL.timestamp({
    //         format: 'YYYY-MM-DD HH:mm:ss'
    //     })
    // ),
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: "logs/payfast.log",
            maxsize: 1000,
            maxFiles: 10,
            format: formatL.combine(
                formatL.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                formatL.json()
            )
        })
    ]
});