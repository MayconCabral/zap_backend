const router = require('express').Router();
const Contact = require('../controllers/contact');
const authentication = require('../middlewares/authentication');


router.post('/contact', authentication, Contact.addContact);
router.get('/contacts', authentication, Contact.getContacts);

module.exports = router;
