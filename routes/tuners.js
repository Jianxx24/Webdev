const express = require('express')
const router = express.Router();

var tunerController = require('../controllers/tunerController');

router.get('/', tunerController.index);

console.log("router gotowy")

module.exports = router;