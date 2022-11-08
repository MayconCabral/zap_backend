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

app.use(userRouter);
app.use(contactRouter);
app.use(messageRouter);

app.use(ERROR);

module.exports = app;
