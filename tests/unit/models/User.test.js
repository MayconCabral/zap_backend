const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/database/models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  it('check the modal "User"', () => {
    checkModelName(User)('User');
  })

  it('check the properties, "name", "password", "phoneNumber" and "id"', () => {
    ['name', 'password', 'phoneNumber', 'id'].forEach(checkPropertyExists(user))
  })
});
