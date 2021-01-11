const mongoose = required('mongoose')

const TunerSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    description: {type: String, required: true,},
    version: {type: String, enum: ['olejowe','blokowane'], required: true},
})

const Tuner = mongoose.model('Tuner', TunerSchema)

module.exports = Tuner