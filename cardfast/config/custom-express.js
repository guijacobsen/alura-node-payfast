const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const consign = require('consign');

app.use( bodyParser.urlencoded({'extended':true}) );
app.use( bodyParser.json() );
app.use( expressValidator() );

consign()
    .include('controllers')
    .into(app);



app.get('/', (req, res) => {
    res.send('Cardfast');
});
app.get('/:id', (req, res) => {
    res.send('Cardfast id: ' + req.params.id);
});
module.exports = app;