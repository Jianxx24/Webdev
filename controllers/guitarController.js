var multer = require('multer');
const bodyParser = require("body-parser");
var path = require('path');
const {ensureAuthenticated} = require("../config/auth.js")
var Guitar = require('../models/guitar');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images/');
    },  filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage:storage});
exports.index = function(req,res) {
    let guitarsList

    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find().lean()
            console.log(guitarsList)
            res.render('all_guitars',{guitars:guitarsList, session:req.session});
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
            guitarsList = await Guitar.find({brand: id}).lean()
            // console.log(guitarsList)
            console.log(guitarsList[0])
            res.render('all_guitars', {guitars: guitarsList, session:req.session});
        }catch(err){console.log(err)}
    }
    getGuitars()
}
exports.guitar = function(req,res) {
    var id = req.params.id
    console.log(id)
    let guitarsList

    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.findById(id).lean()
            console.log(guitarsList)
            res.render("guitar",{guitars:guitarsList, session:req.session});
        }catch(err){
            console.log(err)
        }
    }
    getGuitars()
}
exports.getAddGuitar = function(req,res){
    res.render('add_guitar', {
        title: 'Dodanie Gitary', session:req.session
    });
}

exports.getEditGuitar = function(req,res){
    var id = req.body.id
    let guitar
    console.log(id);
    const editGuitar = async () => {try{
    guitar = await Guitar.findById(id).lean();
    console.log("++++++++++++++++++++++++++++ GITARA"+guitar.brand);
    console.log("+++++++++++++++++++++++++++");
    res.render('edit_guitar', {
        title: 'Edycja Gitary', session:req.session, guitar: guitar
    });}catch(err){console.log(err)}}
    editGuitar();
}
// exports.addGuitar = upload.single('image'), function(req,res){
    
//     console.log(req.body)
//     console.log(req.body)
//     console.log(req.file)
//     const NewGuitar = new Guitar({
//         brand : req.body.brand,
//         model : req.body.model,
//         description: req.body.description,
//         imageUrl:req.file.path,
//         price:req.body.price,
//     })
//     NewGuitar.save().then(()=>{res.render('createShow',{item: req.body})})
// }
exports.deleteGuitar = function(req,res){
    var id = req.body.id
    console.log(id)
    
    Guitar.deleteOne({_id: id},function(err, doc){
        console.log(err);
        
        if (err) { return sendError(res,err) }
    res.redirect('/guitars')
})}



console.log("kontroler gotowy")