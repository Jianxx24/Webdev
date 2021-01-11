var Guitar = require('../models/guitar');

exports.index = function(req,res) {
    let guitarsList

    const getGuitars = async() => {
        try{
            guitarsList = await Guitar.find()
            console.log(guitarsList)
            res.send(guitarsList);
        }catch(err){
            console.log(err)
        }
    }
    getGuitars()
}

console.log("kntroler gotowy")