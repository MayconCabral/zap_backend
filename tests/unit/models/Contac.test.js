const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ContactModel = require('../../../src/database/models/contact');

describe('O model de Contact', () => {
  const Contact = ContactModel(sequelize, dataTypes);
  const contact = new Contact();

  it('check the modal "Contact"', () => {
    checkModelName(Contact)('contact');
  })

  it('check the properties, "name", "phone" and "userId"', () => {
    ['name', 'phone', 'phoneNumber', 'userId'].forEach(checkPropertyExists(contact))
  })
});
