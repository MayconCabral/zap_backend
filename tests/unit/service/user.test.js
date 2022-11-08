const chai = require('chai');
const chaiHttp = require('chai-http');

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
      const { status } = postUser;
      //this test will fail if running again without delete user from db.
      expect(status).to.be.equals(201)
    })
  })

  describe('When the "body" data are NOT valid', () => {
    let postUser;

    before(async () => {
      try {
        postUser = await chai.request(app)
                    .post('/register')
                    .send({
                      name:'',
                      phoneNumber: '6133218181',
                      password: 'abc123'
                    })
      } catch (error) {
        console.error(error.message);
      }
    });

    it('empty name, error message must be equal to "o campo é obrigatório"', () => {
      const { body: {error}} = postUser;

      expect(error).to.be.equals('o campo nome é obrigatório')
    })
  })
})