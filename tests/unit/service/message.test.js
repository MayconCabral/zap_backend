const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../src/api');
const token = require('../index');

//no console.log for the test.
const consoleLogStub = stub(console, 'log');
before(()=> consoleLogStub.returns(true));
after(()=> consoleLogStub.restore());

const JWTstub = stub(jwt, 'verify');
before(() => JWTstub.returns(token));
after(() => JWTstub.restore());

describe('Rote POST /message', () => {
  describe('When the "body" data are valid', () => {
    let postMessage;    
    
    before(async () => {
      try {
        postMessage = await chai.request(app)
                      .post('/message')
                      .set({ Authorization: token })
                      .send({
                        sender: "2",
                        message: 'Olá mundo!',
                        receiver: "1"
                      });
        
      } catch (error) {
        console.error(error.message);
      }
    });

    it('return 201 - Created', async () => {
      const { status } = postMessage;

      expect(status).to.be.equals(201)
    })

    it('return an "id", must be a number', async () => {
      const { body: {id} } = postMessage;

      expect(typeof id).to.be.equals('number');
    })

    it('message must be saved correctly', async () => {
      const { body: {message} } = postMessage;

      expect(message).to.be.equal('Olá mundo!')
    })
  });
});

describe('When the user does not have a TOKEN', () => {
  let postMessage;    
    
  before(async () => {
    try {
      postMessage = await chai.request(app)
                    .post('/message')                    
                    .send({
                      sender: "2",
                      message: 'Olá mundo!',
                      receiver: "1"
                    });
      
    } catch (error) {
      console.error(error.message);
    }
  });

  it('return 401 - ERROR', async () => {
    const { status } = postMessage;

    expect(status).to.be.equals(401)
  })

  it('error message must be equal to "Acesso negado!"', () => {
    const { body: {error}} = postMessage;

    expect(error).to.be.equals('Acesso negado!')
  })
})
