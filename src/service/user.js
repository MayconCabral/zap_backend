//------ FOR THE TEST!!!
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
// -------------------------------------------------
const md5 = require('md5');
const { User } = require('../database/models');

const schema = require('../schema');
const utils = require('../utils');



const create = async (req) => {
  const { error } = schema.createUser.validate(req);
  if ( error ) {
    throw utils.erroMessage(400, error.message)
  };

  const { name, phoneNumber, password } = req;
  const hashedPassword = md5(password);
  const user = await User.findOne({where: { phoneNumber, password: hashedPassword}});  
  if (user) {
    throw utils.erroMessage(409, 'Usuário já cadastrado!');
  };

  const response = await User.create({name, phoneNumber, password: hashedPassword}); 
  const token = utils.encode(response['id'], response['phoneNumber'])

  return {
    id: response['id'],
    name: response['name'],
    token,
  }
};

const login = async (req) => {
  const { name, password } = req;
  const hashedPassword = md5(password);  
  const user = await User.findOne({where: { name, password: hashedPassword }});
  
  if (!user) {    
    throw utils.erroMessage(404, 'Usuário não cadastrado!');
  }

  const { id, phoneNumber } = user;
  const token = utils.encode(id, phoneNumber);

  return {
    id,
    phoneNumber,
    token,
  }
}

module.exports = {
  create,
  login,
}