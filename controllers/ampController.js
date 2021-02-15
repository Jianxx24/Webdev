const bodyParser = require("body-parser")
const Amplifier = require('../models/amplifier');
var Amp = require('../models/amplifier');
const multer = require('multer');

const {ensureAuthenticated} = require("../config/auth.js")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/');
    },  filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }})

exports.index = function(req,res) {
    let ampsList

    const getAmps = async() => {
        try{
            ampsList = await Amp.find().lean()
            console.log(ampsList)
            res.render("all_amps",{amps:ampsList, session:req.session});
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
            cabsList = await Amp.find({brand:id}).lean()
            console.log(ampsList)
            res.render("all_amps",{amps:ampsList, session:req.session});
        }catch(err){console.log(err)}
    }
    getAmps()
}

exports.power = function(req,res){
    var id = req.params.power
    let ampsList
    const getAmps = async() => {
        try{
            ampsList = await Amp.find({power:id}).lean()
            console.log(ampsList)
            res.render("all_amps",{amps:ampsList, session:req.session});
        }catch(err){console.log(err)}
    }
    getAmps()
}

exports.amp = function(req,res) {
    var id = req.params.id
    console.log(id)
    let ampsList

    const getAmps = async() => {
        try{
            ampsList = await Amp.findById(id).lean()
            console.log(ampsList)
            res.render("amp",{amps:ampsList, session:req.session});
        }catch(err){
            console.log(err)
        }
    }
    getAmps()
}
exports.getAddAmp = function(req,res){
    res.render('add_amp', {
        title: 'Dodanie Wzmacniacza', session: req.session
    });
}

exports.deleteAmp = function(req,res){
    var id = req.body.id
    console.log(id)
    
    Amp.deleteOne({_id: id},function(err, doc){
        console.log(err);
        
        if (err) { return sendError(res,err) }
    res.redirect('/amps')
})}

// exports.addAmp = function(req,res){
//     const Amp = new Amplifier({
//         brand : req.body.brand,
//         model: req.body.model,
//         power: req.body.power,
//         channels: req.body.channels,
//         fxloop: req.body.fxloop,
//         noisegate: req.body.noisegate,
//         preamptubes: req.body.preamptubes,
//         outputtubes: req.body.outputtubes,
//         imageUrl:"/images/amps/"+Math.random().toString(36).substr(2, 9),
//         price: req.body.price

//     })
//     XMLHttpRequestUpload.single
//     Amp.save().then(()=>{res.render('createShow',{item: req.body})})
// }

console.log("kontroler gotowy")