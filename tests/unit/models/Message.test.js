const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const MessageModel = require('../../../src/database/models/message');

describe('O model de Message', () => {
  const Message = MessageModel(sequelize, dataTypes);
  const message = new Message();

  it('check the modal "Message"', () => {
    checkModelName(Message)('Message');
  })

  it('check the properties, "sender", "message", "receiver" and "createdAt"', () => {
    ['sender', 'message', 'receiver', 'createdAt'].forEach(checkPropertyExists(message))
  })
});
