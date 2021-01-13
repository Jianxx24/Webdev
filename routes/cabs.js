const express = require('express')
const router = express.Router();

var cabController = require('../controllers/cabController');

router.get('/', cabController.index);
router.get('/brand/:brand', cabController.brand);
router.get('/power/:power', cabController.power);
router.get('/speakers/:speakers', cabController.speaker);
router.post('/add', cabController.addCab);
// router.post('/edit/:id', cabController.editCab);

console.log("router gotowy")

module.exports = router;