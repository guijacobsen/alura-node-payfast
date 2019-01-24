const app = require('./config/custom-express');
const PORT = 3000;

app.listen(PORT, () => console.log(`CardFast rodando na porta ${PORT}`));