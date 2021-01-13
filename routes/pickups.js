const express = require('express')
const router = express.Router();

var pickupController = require('../controllers/pickupController');

router.get('/', pickupController.index);
router.get('/brand/:brand', pickupController.brand);
router.get('/active/:active', pickupController.active);
router.get('/coilsplit/:coilsplit', pickupController.coilsplit);
router.post('/add', pickupController.addPickup);
// router.post('/edit/:id', pickupController.editPickup);

console.log("router gotowy")

module.exports = router;