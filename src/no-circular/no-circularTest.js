const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { Identifier } = require('./merge');

let testSchema = new mongoose.Schema({
    type: Identifier
});
require('mongoose-schema-jsonschema')(mongoose);
let testJsonSchema = testSchema.jsonSchema();
fs.writeFileSync(path.join(__dirname, 'dumpJsonSchema.json') , JSON.stringify(testJsonSchema, null , 4));