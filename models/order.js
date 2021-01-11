const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    user: {type: UserSchema, required: true,},
    guitars: {type: [GuitarSchema]},
    amps: {type: [AmplifierSchema],},
    pickups: {type: [PickupSchema],},
    cabs: {type: [CabinetSchema],},
    price: {type: Number}
})