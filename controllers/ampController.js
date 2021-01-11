var Amp = require('../models/amplifier');

exports.index = function(req,res) {
    let ampsList

    const getAmps = async() => {
        try{
            ampsList = await Amp.find()
            console.log(ampsList)
            res.send(ampsList);
        }catch(err){
            console.log(err)
        }
    }
    getCabs()
}

console.log("kntroler gotowy")