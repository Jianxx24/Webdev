const express = require('express')
const {ensureAuthenticated} = require("../config/auth.js")
var path = require('path');

var Guitar = require('../models/guitar');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images');
    },  filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage:storage});
const bodyParser = require("body-parser")
const router = express.Router();
var authenticate = require('../middleware/authenticate')
var guitarController = require('../controllers/guitarController');
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', guitarController.index);
router.get('/model/:id', guitarController.guitar);
router.get('/brand/:brand', guitarController.brand);
router.get('/addGuitar' , ensureAuthenticated, guitarController.getAddGuitar);
router.post('/add', ensureAuthenticated, upload.single('image'), function(req,res){
    const NewGuitar = new Guitar({
        brand : req.body.brand,
        model : req.body.model,
        description: req.body.description,
        imageUrl:"../../images/"+req.file.filename,
        price:req.body.price,
    })
    NewGuitar.save().then(()=>{res.redirect('/guitars')})
});
router.post('/editGuitar', ensureAuthenticated, upload.single('image'), function(req,res){
    let guitar = {
    brand:req.body.brand,
        model : req.body.model,
        description: req.body.description,
        imageUrl:"../../images/"+req.file.filename,
        price:req.body.price,
    };
    Guitar.findByIdAndUpdate(req.body.id,guitar, function (err,docs){
        if (err){
            console.log(err)}
            else{res.redirect('/guitars')}
        }
    )});
router.post('/delete',guitarController.deleteGuitar);
router.post('/edit', guitarController.getEditGuitar);

console.log("router gotowy")

module.exports = router;