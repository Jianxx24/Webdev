const Amplifier = require('../models/amplifier');
var Amp = require('../models/amplifier');

exports.index = function(req,res) {
    let ampsList

    const getAmps = async() => {
        try{
            ampsList = await Amp.find()
            console.log(ampsList)
            res.send(ampsList);
        }catch(err){
            console.log(err)
        }
    }
    getAmps()
}

exports.brand = function(req,res){
    var id = req.params.brand
    let ampsList
    const getAmps = async() => {
        try{
            cabsList = await Amp.find({brand:id})
            console.log(ampsList)
            res.render('show', {amps: ampsList});
        }catch(err){console.log(err)}
    }
    getAmps()
}

exports.power = function(req,res){
    var id = req.params.power
    let ampsList
    const getAmps = async() => {
        try{
            ampsList = await Amp.find({power:id})
            console.log(ampsList)
            res.render('show', {amps: ampsList});
        }catch(err){console.log(err)}
    }
    getAmps()
}

exports.addAmp = function(req,res){
    const Amp = new Amplifier({
        brand : req.body.brand,
        model: req.body.model,
        power: req.body.power,
        channels: req.body.channels,
        fxloop: req.body.fxloop,
        noisegate: req.body.noisegate,
        preamptubes: req.body.preamptubes,
        outputtubes: req.body.outputtubes,
        price: req.body.price

    })
    Amp.save().then(()=>{res.render('createShow',{item: req.body})})
}

console.log("kntroler gotowy")