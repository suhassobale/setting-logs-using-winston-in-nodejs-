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
        transports: [new winston.transports.Console(),   // this line is used to log in console
            new winston.transports.File({
                filename: path.join(__dirname, '../logs', 'app.log'),       // this line is used to write logs in app.log inside logs folder
            })
        ],
        json: true,
    });

 /*now to write log use below code in any router or place where you want logs
 
 logger.log('info', 'A request was received'); */
