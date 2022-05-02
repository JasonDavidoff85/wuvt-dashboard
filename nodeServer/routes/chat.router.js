var express = require('express');
var router = express.Router();
const messageController = require('../controllers/message.controller');

router.post('/send', messageController.sendMessage);
router.get('/getmsg', messageController.getAllMessages);

module.exports = router;