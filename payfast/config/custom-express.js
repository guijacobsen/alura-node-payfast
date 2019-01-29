const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

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
