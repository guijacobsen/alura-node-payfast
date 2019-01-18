const app = require('./config/custom-express')();
const PORT = 3001;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get('/', (req, res) => {
    console.log('Request url: /');
    // res.status(200).end();
    res.send('');
});