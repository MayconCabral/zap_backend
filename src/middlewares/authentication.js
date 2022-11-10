const utils = require('../utils');

const authentication = (req, _res, next) => {
  const { authorization: token } = req.headers;
  console.log(token)
  if (!token) throw utils.erroMessage(401, 'Acesso negado!');

    try {
      const data = utils.decode(token);
      req.user = data;     
    } catch (error) {
      throw utils.erroMessage(401, 'Acesso expirado!');
    }

    next();
};

module.exports = authentication;
