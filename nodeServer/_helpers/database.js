const config = require('../config.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true });

module.exports = {
    Message: require('../models/message.model'),
    PSA: require('../models/psa.model'),
};