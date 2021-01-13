var Pickup = require('../models/pickup');

exports.index = function(req,res) {
    let pickupsList

    const getPickups = async() => {
        try{
            pickupsList = await Pickup.find()
            console.log(pickupsList)
            res.send(pickupsList);
        }catch(err){
            console.log(err)
        }
    }
    getPickups()
}

exports.brand = function(req,res){
    var id = req.params.brand
    let pickupsList
    const getPickups = async() => {
        try{
            pickupsList = await Pickup.find({brand:id})
            console.log(pickupsList)
            res.render('show', {pickups: pickupsList});
        }catch(err){console.log(err)}
    }
    getPickups()
}

exports.active = function(req,res){
    var id = req.params.active
    let pickupsList
    const getPickups = async() => {
        try{
            pickupsList = await Pickup.find({active:id})
            console.log(pickupsList)
            res.render('show', {pickups: pickupsList});
        }catch(err){console.log(err)}
    }
    getPickups()
}

exports.coilsplit = function(req,res){
    var id = req.params.coilsplit
    let pickupsList
    const getPickups = async() => {
        try{
            pickupsList = await Pickup.find({coilsplit:id})
            console.log(pickupsList)
            res.render('show', {pickups: pickupsList});
        }catch(err){console.log(err)}
    }
    getPickups()
}

exports.addPickup = function(req,res){
    const Pickup = new Pickup({
        brand : req.body.brand,
        model : req.body.model,
        active: req.body.active,
        coilsplit: req.body.coilsplit,
        price: req.body.price
        
    })
    Pickup.save().then(()=>{res.render('createShow',{item: req.body})})
}

console.log("kntroler gotowy")