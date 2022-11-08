const service = require('../service/contact');

const addContact = async (req, res) => {
  const contactInfo = req.body;
  const response = await service.addContact(contactInfo);

  return res.status(201).json(response);
}

module.exports = {
  addContact,
}