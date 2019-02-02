const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
var fs = require('fs');

if( ! fs.existsSync('logs') ) {
    fs.mkdirSync('logs');
}

var logger = require('../servicos/logger');

const app = express();

app.use( morgan(
    'common', {
        stream: {
            write: (mensagem) => {
                // logger.info(`Logando requisicao`);
                logger.info(mensagem);
            }
        }
    }
) );

// app.use( morgan(
//     // 'common', {
//         (info, req, res) => `${info.method(req, res)} -> ${info.url(req, res)} :: ${info.status} --- ${info['response-time'](req, res)} ms`
//         // stream: {
//         //     write: (mensagem) => {
//         //         // logger.info(`Logando requisicao`);
//         //         logger.info(mensagem);
//         //     }
//         // }
//     // }
// ) );

app.use( bodyParser.urlencoded({ extended:true }) );
app.use( bodyParser.json() );
app.use( expressValidator() );

consign()
    .include('controllers')
    .then('persistencia')
    .then('servicos')
    .into(app);

module.exports = () => {
    return app;
};
