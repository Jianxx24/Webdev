const mongoose = require('mongoose')

const AmplifierSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    model: {type: String, required: true,},
    power: {type: Number, required: true,},
    channels: {type: Number, required: true,},
    fxloop: {type: Boolean, required: true, default: false,},
    noisegate: {type: Boolean, required: true, default: false,},
    preamptubes: {type: String, required:true,},
    outputtubes: {type: String, required: true,},
    imageUrl: {type:String, required: true,},
    price: {type: Number, required: true,},
})

const Amplifier = mongoose.model('Amplifier', AmplifierSchema)

module.exports = Amplifier