const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    text: { type: String, required: true },
    number: { type: Number,unique: true, required: true },
    isActive: { type: Boolean, default: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PSA', schema);