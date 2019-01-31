var soap = require('soap');
var url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
soap.createClient(url, (erro, cliente) => {
    if( erro ) {
        console.log('Falha ao criar cliente soap correios');
        console.log('erro ::', erro);
    } else {
        console.log('Cliente soap correios criado');

        cliente.CalcPrazo({
            'nCdServico' : '40010',
            'sCepOrigem' : '04101300',
            'sCepDestino' : '65000600'
        }, (err, resultado) => {
            console.log(JSON.stringify(resultado));
        });
    }
});