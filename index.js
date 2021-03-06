const daSchema = require('./src/da-schema');

module.exports.default = {
    checkJsObject: daSchema.checkJsObject,
    checkSchema: daSchema.checkSchema,
    createJsObject: daSchema.createJsObject
}

module.exports.checkJsObject = daSchema.checkJsObject;
module.exports.checkSchema = daSchema.checkSchema;
module.exports.createJsObject = daSchema.createJsObject;