
module.exports = (app) => {
    
    app.get('/pagamentos', (req, res) => {
        console.log('Request url: /pagamentos');
        res.send('pagamentos');
    });

    app.post('/pagamentos/pagamento', (req, res) => {
        console.log('Request url: /pagamentos/pagamento -- method: post');
        let params = req.body;
        console.log(params);

        params.status = 'CRIADO';
        params.data = new Date();

        let conn = app.persistencia.connectionFactory();
        let pagamentoDao = new app.persistencia.PagamentoDao(conn);

        pagamentoDao.salva(params, (erro, result) => {
            console.log('-- salva --');
            console.log('erro', erro);
            console.log('result', result);
            // res.json(params);
            res.send(params);
        });

        // res.send(params);
    });

}
