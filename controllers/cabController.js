const bodyParser = require("body-parser")
const Amplifier = require('../models/amplifier');
const Cabinet = require('../models/cabinet');
var Cab = require('../models/cabinet');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/');
    },  filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }})

exports.index = function(req,res) {
    let cabsList

    const getCabs = async() => {
        try{
            cabsList = await Cab.find().lean()
            console.log(cabsList)
            res.render("all_cabs",{cabs:cabsList, session: req.session});
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
            res.render('all_cabs', {cabs: cabsList, session:req.session});
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
            res.render('all_cabs', {cabs: cabsList, session:req.session});
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
            res.render('all_cabs', {cabs: cabsList, session:req.session});
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
            res.render("cab",{cabs:cabsList, session:req.session});
        }catch(err){
            console.log(err)
        }
    }
    getCabs()
}

exports.getAddCab = function(req,res){
    res.render('add_cab', {
        title: 'Dodanie Kolumny', session:req.session
    });
}
exports.deleteCab = function(req,res){
    var id = req.body.id
    console.log(id)
    
    Cabinet.deleteOne({_id: id},function(err, doc){
        console.log(err);
        
        if (err) { return sendError(res,err) }
    res.redirect('/cabs')
})}
// exports.addCab = function(req,res){
//     const Cab = new Cabinet({
//         brand : req.body.brand,
//         model: req.body.model,
//         power: req.body.power,
//         impendation : req.body.impendation,
//         speakers: req.body.speakers,
//         speakertype: req.body.speakertype,
//         imageUrl:"/images/cabs/"+Math.random().toString(36).substr(2, 9),
//         price: req.body.price
//     })
//     Cabinet.save().then(()=>{res.render('createShow',{item: req.body})})
// }

console.log("kntroler gotowy")