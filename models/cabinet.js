const mongoose = require('mongoose')

const CabinetSchema = new mongoose.Schema({
    brand: {type: String, required: true,},
    model: {type: String, required: true,},
    power: {type: Number, required: true,},
    impendation: {type: String, required: true,},
    speakers: {type: String, enum: ['1x10','1x12','1x3','1x6','1x8','1x<3','2x10','2x12','2x3','2x8','4x12'], required: true,},
    speakertype: {type:String, required: true,},
    price: {type: Number, required: true,},
})

const Cabinet = mongoose.model('Cabinet',CabinetSchema)

module.exports=Cabinet