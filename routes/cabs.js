const express = require('express')
var multer = require('multer');
var path = require('path');
var Cabinet = require('../models/cabinet');

const {ensureAuthenticated} = require("../config/auth.js")
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
router.use(bodyParser.urlencoded({
    extended: true
}));
var cabController = require('../controllers/cabController');

router.get('/', cabController.index);
router.get('/brand/:brand', cabController.brand);
router.get('/power/:power', cabController.power);
router.get('/model/:id', cabController.cab);
router.get('/speakers/:speakers', cabController.speaker);

router.get('/addCab', ensureAuthenticated, cabController.getAddCab);
router.post('/add', ensureAuthenticated,  upload.single('image'), function(req,res){
    const Cab = new Cabinet({
        brand : req.body.brand,
        model: req.body.model,
        power: req.body.power,
        impendation : req.body.impendation,
        speakers: req.body.speakers,
        speakertype: req.body.speakertype,
        imageUrl:"../../images/"+req.file.filename,
        price: req.body.price
    })
    Cab.save().then(()=>{res.redirect('/cabs')})
});
// router.post('/edit/:id', cabController.editCab);
router.post('/delete', ensureAuthenticated, cabController.deleteCab);
console.log("router gotowy")

module.exports = router;