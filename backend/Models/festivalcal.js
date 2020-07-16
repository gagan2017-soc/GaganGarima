var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let festivalcal = new Schema({
    festdt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    holidayname: {
        type: String,
        trim: true,
        required: true
    },
   
});

module.exports = mongoose.model('festivalcal',festivalcal);
