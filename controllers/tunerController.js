var Tuner = require('../models/tuner');

exports.index = function(req,res) {
    let tunersList

    const getTuners = async() => {
        try{
            tunersList = await Tuner.find()
            console.log(tunersList)
            res.send(tunersList);
        }catch(err){
            console.log(err)
        }
    }
    getTuners()
}

console.log("kntroler gotowy")