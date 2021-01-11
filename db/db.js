const mongoose = require("mongoose");
const url='mongodb://127.0.0.1:27017'
const name = 'projectDB'
mongoose.connect(url+name, {useNewUrlParser: true,
useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true});
const Schema = mongoose.Schema;


module.exports