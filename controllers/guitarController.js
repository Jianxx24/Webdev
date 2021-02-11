var Guitar = require('../models/guitar');

exports.index = function(req,res) {
    let guitarsList

    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find()
            console.log(guitarsList)
            res.render("all_guitars",{guitars:guitarsList});
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
            // console.log(guitarsList)
            console.log(guitarsList[0])
            res.render('all_guitars', {guitars: guitarsList});
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
    const NewGuitar = new Guitar({
        brand : req.body.brand,
        model : req.body.model,
        imageUrl:req.body.imageUrl,
        price:req.body.price,
    })
    NewGuitar.save().then(()=>{res.render('createShow',{item: req.body})})
}



console.log("kntroler gotowy")