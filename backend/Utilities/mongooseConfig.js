var mongoose = require('mongoose');
mongoose.set('debug', true);
var config = require("../Utilities/config").config;

module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
    require('../Models/User');
    return db;
};
