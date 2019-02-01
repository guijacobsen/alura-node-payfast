var fs = require('fs');

fs.createReadStream('imagem.png')
    .pipe(fs.createWriteStream('imagem-com-stream.png'))
    .on('finish', () => {
        console.log('arquivo escrito com stream');
    })