const mongoose = require('mongoose')
const User = require('./user')
const Guitar = require('./guitar')
const GuitarSchema = mongoose.model('Guitar').schema
const Amplifier = require('./amplifier')
const AmplifierSchema = mongoose.model('Amplifier').schema
const Pickup = require('./pickup')
const PickupSchema = mongoose.model('Pickup').schema
const Cabinet = require('./cabinet')
const CabinetSchema = mongoose.model('Cabinet').schema
const UserSchema = mongoose.model('User').schema

const BasketSchema = new mongoose.Schema({
    user: {type: UserSchema, required: true,},
    guitars: {type: [GuitarSchema]},
    amps: {type: [AmplifierSchema],},
    pickups: {type: [PickupSchema],},
    cabs: {type: [CabinetSchema],},
    price: {type: Number}
})

const Basket = mongoose.model('Basket', BasketSchema)

module.export = Basket