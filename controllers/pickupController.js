var Pickup = require('../models/pickup');

exports.index = function(req,res) {
    let pickupsList

    const getPickups = async() => {
        try{
            pickupsList = await Pickup.find()
            console.log(pickupsList)
            res.send(pickupsList);
        }catch(err){
            console.log(err)
        }
    }
    getPickups()
}

console.log("kntroler gotowy")