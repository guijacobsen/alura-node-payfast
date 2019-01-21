
module.exports = (app) => {
    
    app.get('/pagamentos', (req, res) => {
        console.log('Request url: /pagamentos');
        res.send('pagamentos');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        console.log('Request url: /pagamentos/pagamento -- method: post');

        req.assert(
            "forma_de_pagamento",
            "Forma de pagamento obrigatorio"
        ).notEmpty();
        
        req.assert(
            "valor",
            "Valor obrigatorio e deve ser decimal"
        ).notEmpty().isFloat();

        let errors = req.validationErrors();

        if( errors ) {
            console.log('Erros de validacao encontrados');
            res.status(400).send(errors);
            return;
        }

        let params = req.body;
        console.log(params);

        params.status = 'CRIADO';
        params.data = new Date();

        let conn = app.persistencia.connectionFactory();
        let pagamentoDao = new app.persistencia.PagamentoDao(conn);

        pagamentoDao.salva(params, (erro, result) => {
            console.log('-- salva --');
            if( erro ) {
                console.log('erro ao inserir : ' + erro);
                res.status(500).send(erro);
            } else {
                console.log('result', result);
                res.location(`/pagamentos/pagamento/${result.insertId}`);
                res.status(201).json(params);
            }
        });

        // res.send(params);
    });

}
