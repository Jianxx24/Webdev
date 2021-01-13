var Guitar = require('../models/guitar');

exports.index = function(req,res) {
    let guitarsList

    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find()
            console.log(guitarsList)
            res.send(guitarsList);
        }catch(err){
            console.log(err)
        }
    }
    getGuitars()
}
exports.brand = function(req,res){
    var id = req.params.brand
    let guitarsList
    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find({brand:id})
            console.log(guitarsList)
            res.render('show', {guitars: guitarsList});
        }catch(err){console.log(err)}
    }
    getGuitars()
}

exports.shape = function(req,res){
    var shape = req.params.shape
    let guitarsList
    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find({shape:shape})
            console.log(guitarsList)
            res.render('show', {guitars : guitarsList})
        }catch(err){console.log(err)}
    }
    getGuitars()
}

exports.addGuitar = function(req,res){
    const Guitar = new Guitar({
        brand : req.body.brand,
        model : req.body.model,
        shape : req.body.shape,
        frets : req.body.frets,
        pickups : req.body.pickups,
        neck:req.body.neck,
        bridge: req.body.bridge,
        tuners:req.body.tuners,
        scale:req.body.scale,
        bodywood:req.body.bodywood,
        neckwood:req.body.neckwood,
        profile:req.body.profile,
        strings:req.body.strings,
        price:req.body.price,
    })
    Guitar.save().then(()=>{res.render('createShow',{item: req.body})})
}



console.log("kntroler gotowy")