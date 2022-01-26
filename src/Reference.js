const mongoose = require('mongoose');
const Identifier = require('./Identifier');
module.exports = new mongoose.Schema({
    identifier: {
        type: Identifier,
        default: void 0
    }
});