const { Contact } = require('../database/models');

const utils = require('../utils');

const addContact = async (req) => {
  const { name, phone, userId } = req; 
  const id = Number(userId);

  const user = await Contact.findOne({ where: {name, phone, userId: id}});
  if (user) {
    throw utils.erroMessage(409, 'Não é possível adicionar o mesmo contato')
  };

  await Contact.create({name, phone, userId: id});
 
  return {
    message: 'Contato adicionado com sucesso!'
  }
};

module.exports = {
  addContact,
}
