const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../src/api');
const token = require('../index');


describe('Rote POST /contact', () => {
  describe('If the user already exist in the contact list', () => {
    let postContact;       

    before(async () => {
      try {
        await chai.request(app)
          .post('/contact')
          .send({
            name: 'Maria Xiquinha',
            phoneNumber: '6122815454',
            password: 'abc123'
          })      
      
      postContact = await chai.request(app)
                    .post('/contact')
                    .set({ Authorization: token })
                    .send({
                      name: 'Maria Xiquinha',
                      phone: '6122815454',
                      userId: 3
                    })
      
      } catch (error) {
        console.error(error.message);
      }
    });

    it('ERROR message must be equal to "Não é possível adicionar o mesmo contato"', async () => {
      const { body: {error}} = postContact;

      expect(error).to.be.equal('Não é possível adicionar o mesmo contato')
    })
  })
})