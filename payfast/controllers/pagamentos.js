
module.exports = (app) => {
    
    app.get('/pagamentos', (req, res) => {
        console.log('Request url: /pagamentos');

        const conn = app.persistencia.connectionFactory();
        const pagamentoDao = new app.persistencia.PagamentoDao(conn);

        pagamentoDao.getAll((erro, result) => {
            console.log('pagamentoDao.getAll');
            // console.log('erro : ', erro);
            // console.log('result : ', result);
            if( erro ) {
                res.send('erro : ' + erro);
            } else {
                let html = `
                    <table border="1" cellpadding="5" cellspacing="0">
                        <tr>
                            <td>id</td>
                            <td>descricao</td>
                            <td>valor</td>
                            <td>moeda</td>
                            <td>forma_de_pagamento</td>
                            <td>status</td>
                            <td>data</td>
                        </tr>
                `;
                result.map(i => {
                    html += `
                        <tr>
                            <td>${i.id}</td>
                            <td>${i.descricao}</td>
                            <td>${i.valor}</td>
                            <td>${i.moeda}</td>
                            <td>${i.forma_de_pagamento}</td>
                            <td>${i.status}</td>
                            <td>${i.data}</td>
                        </tr>
                    `
                });
                html += '</table>';
                res.send(html);
            }
        });

        // res.send('pagamentos');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        console.log('Request url: /pagamentos/pagamento -- method: post');

        req.assert(
            "pagamento.forma_de_pagamento",
            "Forma de pagamento obrigatorio"
        ).notEmpty();
        
        req.assert(
            "pagamento.valor",
            "Valor obrigatorio e deve ser decimal"
        ).notEmpty().isFloat();

        let errors = req.validationErrors();

        if( errors ) {
            console.log('Erros de validacao encontrados');
            res.status(400).send(errors);
            return;
        }

        // let params = req.body.pagamento;
        let params = req.body['pagamento'];
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
                params.id = result.insertId;

                let response;

                if( params.forma_de_pagamento == 'cartao' ) {
                    var cartao = req.body['cartao'];
                    console.log('cartao :: ', cartao);

                    var clienteCartoes = new app.servicos.clienteCartoes();

                    clienteCartoes.autoriza(cartao, (exception, request, response, retorno) => {
                        console.log('-- clienteCartoes.autoriza --');
                        if( exception ) {
                            console.log('exception : ', exception);
                            res.status(400).send(exception['message']);
                            // res.status(400).json(exception);
                            // res.status(400).send(JSON.stringify(error));
                            return;
                        }
                        // console.log('request : ', request);
                        // console.log('response : ', response);
                        console.log('retorno : ', retorno);



                        response = {
                            dados_do_pagamento: params,
                            cartao: retorno,
                            links: [
                                {
                                    href: `http://localhost:3001/pagamentos/pagamento/${params.id}`,
                                    rel: 'confirmar',
                                    method: 'PUT'
                                },
                                {
                                    href: `http://localhost:3001/pagamentos/pagamento/${params.id}`,
                                    rel: 'cancelar',
                                    method: 'DELETE'
                                }
                            ]
                        };
        
                        res.location(`/pagamentos/pagamento/${params.id}`);
                        res.status(201).json(response);


                        // res.status(201).json(retorno);
                    });

                    // res.status(201).json(cartao);
                    // return;
                } else {
                    
                    response = {
                        dados_do_pagamento: params,
                        links: [
                            {
                                href: `http://localhost:3001/pagamentos/pagamento/${params.id}`,
                                rel: 'confirmar',
                                method: 'PUT'
                            },
                            {
                                href: `http://localhost:3001/pagamentos/pagamento/${params.id}`,
                                rel: 'cancelar',
                                method: 'DELETE'
                            }
                        ]
                    };
    
                    res.location(`/pagamentos/pagamento/${params.id}`);
                    res.status(201).json(response);

                }

            }
        });

        // res.send(params);
    });

    app.put('/pagamentos/pagamento/:id', (req, res) => {
        const id = req.params.id;
        const conn = app.persistencia.connectionFactory();
        const pagamentoDao = new app.persistencia.PagamentoDao(conn);

        let params = { id: id, status: 'CONFIRMADO' };

        pagamentoDao.atualiza(params, (erro, result) => {
            console.log('pagamentoDao.atualiza');
            console.log('erro : ', erro);
            console.log('result : ', result);

            if( erro ) {
                res.status(500).send(erro);
                return;
            }
            res.send(params);
        });

    });

    app.delete('/pagamentos/pagamento/:id', (req, res) => {
        const id = req.params.id;

        const conn = app.persistencia.connectionFactory();
        const pagamentoDao = new app.persistencia.PagamentoDao(conn);

        let params = { id: id, status: 'CANCELADO' };

        pagamentoDao.atualiza(params, (erro, result) => {
            console.log('pagamentoDao.atualiza');
            console.log('erro : ', erro);
            console.log('result : ', result);

            if( erro ) {
                res.status(500).send(erro);
                return;
            }
            res.status(204).send(params);
        });
    });

}
