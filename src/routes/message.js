const router = require('express').Router();
const Message = require('../controllers/message');
const authentication = require('../middlewares/authentication');

router.post('/message', authentication, Message.sendMsg);
router.get('/message', authentication, Message.getMsg);

module.exports = router;
