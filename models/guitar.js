
const mongoose = require('mongoose')

const GuitarSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    model: {type: String, required: true,},description: {type: String, required: true,},
    imageUrl: {type:String, required: true,},
    price: {type: Number, required: true,},
})

const Guitar = mongoose.model('Guitar', GuitarSchema)

module.exports = Guitar