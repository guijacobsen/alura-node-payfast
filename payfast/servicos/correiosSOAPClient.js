var soap = require('soap');

function CorreiosSOAPClient() {
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

CorreiosSOAPClient.prototype.calculaPrazo = function(args, callback) {

    soap.createClient(this._url, (erro, cliente) => {
        if( erro ) {
            console.log('Falha ao criar cliente soap correios');
            console.log('erro ::', erro);
        } else {
            console.log('Cliente soap correios criado');    
            cliente.CalcPrazo(args, callback);
        }
    });

}


module.exports = () => {return CorreiosSOAPClient;}