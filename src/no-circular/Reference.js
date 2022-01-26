const { Identifier } = require('./topDef');
const { Reference } = require('./topDef');
Reference.add({
    identifier: {
        type: Identifier,
        default: void 0
    }
})
module.exports.Reference = Reference;