const Amplifier = require('../models/amplifier');
const Cabinet = require('../models/cabinet');
var Cab = require('../models/cabinet');

exports.index = function(req,res) {
    let cabsList

    const getCabs = async() => {
        try{
            cabsList = await Cab.find()
            console.log(cabsList)
            res.send(cabsList);
        }catch(err){
            console.log(err)
        }
    }
    getCabs()
}

exports.brand = function(req,res){
    var id = req.params.brand
    let cabsList
    const getCabs = async() => {
        try{
            cabsList = await Cabinet.find({brand:id})
            console.log(cabsList)
            res.render('show', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.power = function(req,res){
    var id = req.params.power
    let cabsList
    const getCabs = async() => {
        try{
            cabsList = await Cabinet.find({power:id})
            console.log(cabsList)
            res.render('show', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.speaker= function(req,res){
    var id = req.params.speaker
    let cabsList
    const getCabs = async() => {
        try{
            cabsList = await Cabinet.find({speaker:id})
            console.log(cabsList)
            res.render('show', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.addCab = function(req,res){
    const Cab = new Cabinet({
        brand : req.body.brand,
        model: req.body.model,
        power: req.body.power,
        impendation : req.body.impendation,
        speakers: req.body.speakers,
        speakertype: req.body.speakertype,
        price: req.body.price
    })
    Cabinet.save().then(()=>{res.render('createShow',{item: req.body})})
}

console.log("kntroler gotowy")