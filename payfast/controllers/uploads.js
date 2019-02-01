var fs = require('fs');

module.exports = (app) => {

    /** 
     *@header Content-type: application/octet-stream
     *@header filename
     *@type binary
    **/
    
    app.post('/upload/imagem', (req, res) => {
        console.log('Recebendo requisicao post p/ upload de imagem');

        // var body = req.body; // nao funiona, pois os dados sao recebidos em stream
        var filename = req.headers.filename;
        req.pipe(fs.createWriteStream(`files/${filename}`)).on('finish', () => {
            console.log('arquivo escrito');
            res.status(201).send('ok');
        });

    });

}