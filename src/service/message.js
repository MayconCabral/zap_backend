//------ FOR THE TEST!!!
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
// -------------------------------------------------


const { Message } = require('../database/models');

const sendMsg = async (req) => {
  const { sender, message, receiver } = req;
  const msg = await Message.create({ sender, message, receiver });

  return msg;
};

const getMsg = async (req) => {
  const { sender, receiver } = req;
  const msg = await Message.findAll({where: { sender, receiver }})

  return msg;
};

module.exports = {
  sendMsg,
  getMsg,
}
