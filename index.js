const express = require('express')
const port = 8000
const bodyParser = require("body-parser")
const app = express()
const Guitar = require('./models/guitar')
const Amp = require('./models/amplifier')
const Cab = require('./models/cabinet')
const Pickup = require('./models/pickup')
const Tuner = require('./models/tuner')
const User = require('./models/user')
const Basket = require('./models/basket')
const Order= require('./models/basket')


const usersRoutes = require('./routes/users.js');
const guitarRoutes = require('./routes/guitars')
const ampRoutes = require('./routes/amps')
const cabRoutes = require('./routes/cabs')
const pickupRoutes = require('./routes/pickups')
const userRoutes = require('./routes/users')
const tunerRoutes = require('./routes/tuners')

const mongoose = require('./db/db')


app.use(bodyParser.json())
app.use('/users', usersRoutes)
app.use('/guitars',guitarRoutes)
app.use('/amps', ampRoutes)
app.use('/cabs', cabRoutes)
app.use('/pickups', pickupRoutes)
app.use('/tuners', tunerRoutes)
app.use('/users', userRoutes)

app.set('view engine', 'hbs');



app.get('/', (req,res) =>{res.render('index', {Title: "Sklep", Body: "Gitary"})})
app.get('/users', (req,res) =>{res.send("użytkownicy")})
app.get('/comments', (req,res)=> {res.send("komentarze")})



app.listen(port)