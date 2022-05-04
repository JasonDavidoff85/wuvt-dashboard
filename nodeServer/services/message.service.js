const db = require('../_helpers/database');
const message = db.Message;

module.exports = {
    SendMessage,
    getAllMessages
}

async function SendMessage(msg) {
    console.log(msg)
    const newMsg = new message(msg);
    await newMsg.save(function (err) {
        if (err) return handleError(err);
    });
}

async function getAllMessages(date) {
   return await message.find({sentTime: {$gte: new Date(date)}});
}