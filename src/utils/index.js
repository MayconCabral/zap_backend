const jwt = require('jsonwebtoken');

const erroMessage = (status, msg) => (
  { status, msg }
);

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256'
}

const encode = (data) => jwt.sign({ data }, process.env.SECRET_WORD, jwtConfig);
const decode = (token) => jwt.verify(token, process.env.SECRET_WORD);

module.exports = {
  erroMessage,
  encode,
  decode,
};
