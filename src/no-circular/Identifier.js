const { Reference } = require('./topDef');
const { Identifier } = require('./topDef');
Identifier.add({
    assigner: {
        type: Reference,
        default: void 0
    }
})
module.exports.Identifier = Identifier;
