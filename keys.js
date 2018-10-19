// add this file to .gitignore
var winston = require('winston');
var path = require('path');
 
    var logger=winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(info => {
                return `${info.timestamp} ${info.level}: ${info.message}`;
            })
        ),
        transports: [new winston.transports.Console(),
            new winston.transports.File({
                filename: path.join(__dirname, '../logs', 'app.log'),
            })
        ],
        json: true,
    });

 