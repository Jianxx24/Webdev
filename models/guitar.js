const mongoose = require('mongoose')

const GuitarSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    model: {type: String, required: true,},
    shape: {type: String, required: true,},
    frets: {type: Number, required: true,},
    pickups: {type: [PickupSchema], required: true,},
    neck: {type: String, required: true,},
    bridge: {type: String, required: true,},
    tuners: {type: TunerSchema, required: true,},
    scale: {type: Number, required: true,},
    bodywood: {type: String, required: true,},
    neckwood: {type: String, required: true,},
    profile: {type: String, required: true,},
    strings: {type: Number, required: true,},
    price: {type: Number, required: true,},
})

const Guitar = mongoose.model('Guitar', GuitarSchema)

module.exports = Guitar