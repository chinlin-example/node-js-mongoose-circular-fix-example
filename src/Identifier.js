const mongoose = require('mongoose');
const Reference = require('./Reference');
module.exports = new mongoose.Schema({
    assigner: {
        type: Reference,
        default: void 0
    }
});