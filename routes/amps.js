const express = require('express')
const router = express.Router();

var ampController = require('../controllers/ampController');

router.get('/', ampController.index);
router.get('/brand/:brand', ampController.brand);
router.get('/power/:power', ampController.power);
router.post('/add', ampController.addAmp);
// router.post('/edit/:id', ampController.editAmp);

console.log("router gotowy")

module.exports = router;