const service = require('../service/contact');

const addContact = async (req, res) => {
  const request = req.body; 
  const response = await service.addContact(request);

  return res.status(201).json(response);
}

const getContacts = async (req, res) => {
  const request = req.body;
  console.log(request)
  const response = await service.getContacts(request);

  return res.status(200).json(response);
}

module.exports = {
  addContact,
  getContacts,
}