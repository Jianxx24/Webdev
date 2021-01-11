const express = require('express')
const router = express.Router();

var pickupController = require('../controllers/pickupController');

router.get('/', pickupController.index);

console.log("router gotowy")

module.exports = router;