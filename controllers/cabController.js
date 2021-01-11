var Cab = require('../models/cabinet');

exports.index = function(req,res) {
    let cabsList

    const getCabs = async() => {
        try{
            cabsList = await Cab.find()
            console.log(cabsList)
            res.send(cabsList);
        }catch(err){
            console.log(err)
        }
    }
    getCabs()
}

console.log("kntroler gotowy")