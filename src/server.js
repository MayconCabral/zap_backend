require('dotenv').config();
const app = require('./api');
const port = process.env.PORT || 3001;



app.listen(port, console.log(`What's up rodando na porta ${port}`));

