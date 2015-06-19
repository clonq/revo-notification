module.exports = function(){
    var _ = require('underscore');
    // var schemaValidator = require('jsonschema');
    // var notificationSchema = require('bonsens-models').notification;
    // var dao = require('daoi');

    this.init = function(config) {
        var self = this;
    }

}

var defaults = module.exports.defaults = {
    models: {
        notification: {
            supportedMethods: ['email']
        }
    }
}
