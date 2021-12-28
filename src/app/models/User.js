const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullname: {type: String, minlength: 4, maxlength: 255},
    email: {type: String, minlength: 4, maxlength: 255},
    phone: {type: String},
    sex: { type: Number, default: 0},
    birthday: {type: Date},
    position: {type: Number, default: 0},
    experience: {type: Number, default: 0},
    degree: {type: Number, default: 0},
    address: {type: String},
    account: {type:String},
    start_date: {type:Date, default: Date.now},
    end_date:{type:Date, default: Date.now},
    create_at: {type:Date, default: Date.now},
    update_at: {type: Date, default: Date.now},
    delete_flag: {type: Number, default: 0}

});

module.exports = mongoose.model('User', User);