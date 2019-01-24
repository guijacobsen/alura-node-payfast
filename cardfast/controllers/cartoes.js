module.exports = (app) => {

    app.get('/cartoes', (req, res) => {
        res.send('cartoes');
    });

    app.post('/cartoes/autoriza', (req, res) => {
        console.log('req /cartoes/autoriza');

        let cartao = req.body;
        req.assert('numero', 'Número é obrigatório e deve ter 16 dígitos').notEmpty().len(16,16);
        req.assert('bandeira', 'Bandeira é obrigatória').notEmpty();
        req.assert('ano_de_expiracao', 'Ano é obrigatório e deve ter 4 dígitos').notEmpty().len(4,4);
        req.assert('mes_de_expiracao', 'Mês é obrigatório e deve ter 2 dígitos').notEmpty().len(2,2);
        req.assert('cvv', 'CVV é obrigatório e deve ter 3 dígitos').notEmpty().len(3,3);

        const erros = req.validationErrors();
        if( erros ) {
            console.log('Erro(s) de validacao(es) encontrado(s).');
            res.status(400).send(erros);
            return;
        }
        cartao.status = 'AUTORIZADO';
        let response = {
            dados_do_cartao: cartao
        };

        res.status(201).json(response);
        return;


    });

}