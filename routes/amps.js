const express = require('express')
var multer = require('multer');
var path = require('path');
const {ensureAuthenticated} = require("../config/auth.js")
var Amplifier = require('../models/amplifier');
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
var ampController = require('../controllers/ampController');

router.get('/', ampController.index);
router.get('/brand/:brand', ampController.brand);
router.get('/power/:power', ampController.power);
router.get('/model/:id', ampController.amp);
router.get('/addAmp', ampController.getAddAmp);
router.post('/add', ensureAuthenticated, upload.single('image'), function(req,res){
    console.log(req.body)
    const Amp = new Amplifier({
        brand : req.body.brand,
        model: req.body.model,
        power: req.body.power,
        channels: req.body.channels,
        fxloop: req.body.fxloop,
        noisegate: req.body.noisegate,
        preamptubes: req.body.preamptubes,
        outputtubes: req.body.outputtubes,
        imageUrl:"../../images/"+req.file.filename,
        price: req.body.price

    })
    Amp.save().then(()=>{res.redirect('/amps')})
});
// router.post('/edit/:id', ampController.editAmp);
router.post('/delete', ensureAuthenticated, ampController.deleteAmp);
console.log("router gotowy")

module.exports = router;