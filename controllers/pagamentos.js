
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
        params.date = new Date();

        res.send(params);
    });

}
