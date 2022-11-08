const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../src/api');
const token = require('../index');

describe('Rote POST /register', () => {
  describe('When the "body" data are valid', () => {
    let postUser;    
    
    before(async () => {
      try {
        postUser = await chai.request(app)
                      .post('/register')                      
                      .send({
                        name: "João da Silva",
                        phoneNumber: '6133218181',
                        password: "abc123"
                      });
        
      } catch (error) {
        console.error(error.message);
      }
    });

    it('return 201 - Created', async () => {
      const { status } = postMessage;

      expect(status).to.be.equals(201)
    })
  })
})