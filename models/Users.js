const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Schema
const UsersSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{collection:'Users'});

module.exports = Users = mongoose.model('Users',UsersSchema);