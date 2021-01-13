const express = require('express')
const router = express.Router();

var guitarController = require('../controllers/guitarController');

router.get('/', guitarController.index);
router.get('/brand/:brand', guitarController.brand);
router.get('/shape/:shape', guitarController.shape);
router.post('/add', guitarController.addGuitar);
//router.post('/edit/:id', guitarController.editGuitar);

console.log("router gotowy")

module.exports = router;