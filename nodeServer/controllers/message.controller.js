const messageService = require('../services/message.service')

module.exports = {
    sendMessage,
    getAllMessages
};

function sendMessage(req, res, next) {
    messageService.SendMessage(req.body)
    .then((success) => res.json(success))
    .catch((err) => next(err));
}

function getAllMessages(req, res, next) {
    messageService.getAllMessages(req.params.date)
    .then((messages) => res.json(messages))
    .catch((err) => next(err));
}