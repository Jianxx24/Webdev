const mongoose = require('mongoose')

const PickupSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    model: {type: String, required: true,},
    active: {type: Boolean, required: true,},
    coilsplit: {type: Boolean, required: true,},
    price: {type: Number, required: true,},
})

const Pickup = mongoose.model('Pickup', PickupSchema)

module.exports = Pickup