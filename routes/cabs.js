const express = require('express')
const router = express.Router();

var cabController = require('../controllers/cabController');

router.get('/', cabController.index);

console.log("router gotowy")

module.exports = router;