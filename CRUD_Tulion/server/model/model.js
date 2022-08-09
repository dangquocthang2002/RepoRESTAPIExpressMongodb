const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    gender: {
        type:String,
    },
    status:String,

});
    
const userDB = mongoose.model('userdb', schema);

module.exports = userDB;
