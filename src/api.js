const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const ERROR = require('../src/middlewares/handleErrors');
const userRouter = require('../src/routes/user');
const contactRouter = require('../src/routes/contact');
const messageRouter = require('../src/routes/message');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome!',
    apiInfo: 'https://github.com/MayconCabral/zap_backend'
  })
})

app.use(userRouter);
app.use(contactRouter);
app.use(messageRouter);

app.use(ERROR);

module.exports = app;
