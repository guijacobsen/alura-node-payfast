const restify = require('restify');

let cliente = restify.createServer({
    url: 'http://localhost:3000'
});

cliente.post('/cartoes/autoriza', (erro, req, res, retorno) => {
    console.log('consumindo servico de cartoes');
    console.log(retorno);
});