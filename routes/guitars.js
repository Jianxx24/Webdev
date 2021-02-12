const express = require('express')
const router = express.Router();
var authenticate = require('../middleware/authenticate')
var guitarController = require('../controllers/guitarController');

router.get('/', guitarController.index);
router.get('/:id', guitarController.guitar);
router.get('/brand/:brand', guitarController.brand);
router.post('/add', guitarController.addGuitar);
//router.post('/edit/:id', guitarController.editGuitar);

console.log("router gotowy")

module.exports = router;