const express = require('express')
const router = express.Router();

var guitarController = require('../controllers/guitarController');

router.get('/', guitarController.index);

console.log("router gotowy")

module.exports = router;