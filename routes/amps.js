const express = require('express')
const router = express.Router();

var ampController = require('../controllers/ampController');

router.get('/', ampController.index);

console.log("router gotowy")

module.exports = router;