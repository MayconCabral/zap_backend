'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Seles Oliveira',
        password: 'e99a18c428cb38d5f260853678922e03',
        phoneNumber: '61981222555'
      },
      {
        name: 'Vinicius',
        password: 'e99a18c428cb38d5f260853678922e03',
        phoneNumber: '61998999989'
      },
      {
        name: 'Maycon Cabral',
        password: 'e99a18c428cb38d5f260853678922e03',
        phoneNumber: '61983269646'
      },
    ],{}),
  
  down: async (queryInterface) => queryInterface.bulDelete('users', null, {}),
};
