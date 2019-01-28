const restify = require('restify-clients');

let cliente = restify.createJsonClient({
    url: 'http://localhost:3000'
});

cliente.post('/cartoes/autoriza', (erro, req, res, retorno) => {
    console.log('consumindo servico de cartoes');
    console.log(retorno);
});