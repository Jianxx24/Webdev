const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    imie:{
        type: String,
        required: true,
    },
    nazwisko:{type: String, required: true,},
    adres:{type: String, required: true,},
    username:{type: String, required: true,},
    password: {type:String, required: true,},
    email:{type: String, required: true},
    admin: {type: Boolean, default: false},
    phone:{type: String},

})

const User = mongoose.model('User', UserSchema)

module.exports = User