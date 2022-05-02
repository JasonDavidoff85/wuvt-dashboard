const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    isDj: { type: Boolean, required: true },
    text: { type: String, required: true },
    sentTime: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Message', schema);