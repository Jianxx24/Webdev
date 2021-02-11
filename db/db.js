const mongoose = require("mongoose");
const url='mongodb://127.0.0.1:27017'
const name = 'projectDB'
mongoose.connect(url+name, {useNewUrlParser: true,
useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true});
mongoose.connection.once('open',function(){
    console.log('Connected')
})
const Schema = mongoose.Schema;


module.exports