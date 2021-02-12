const Amplifier = require('../models/amplifier');
const Cabinet = require('../models/cabinet');
var Cab = require('../models/cabinet');

exports.index = function(req,res) {
    let cabsList

    const getCabs = async() => {
        try{
            cabsList = await Cab.find().lean()
            console.log(cabsList)
            res.render("all_cabs",{cabs:cabsList});
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
            cabsList = await Cabinet.find({brand:id}).lean()
            console.log(cabsList)
            res.render('all_cabs', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.power = function(req,res){
    var id = req.params.power
    let cabsList
    const getCabs = async() => {
        try{
            cabsList = await Cabinet.find({power:id}).lean()
            console.log(cabsList)
            res.render('all_cabs', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.speaker= function(req,res){
    var id = req.params.speaker
    let cabsList
    const getCabs = async() => {
        try{
            cabsList = await Cabinet.find({speaker:id}).lean()
            console.log(cabsList)
            res.render('all_cabs', {cabs: cabsList});
        }catch(err){console.log(err)}
    }
    getCabs()
}

exports.cab = function(req,res) {
    var id = req.params.id
    console.log(id)
    let cabsList

    const getCabs = async() => {
        try{
            cabsList = await Cabinet.findById(id).lean()
            console.log(cabsList)
            res.render("all_cabs",{cabs:cabsList});
        }catch(err){
            console.log(err)
        }
    }
    getGuitars()
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