const express = require('express')
const port = 8000
const bodyParser = require("body-parser")
const app = express()
const usersRoutes = require('./routes/users.js');
const Guitar = require('./models/guitar')
const guitarRoutes = require('./routes/guitars.js')

const mongoose = require('./db/db')


app.use(bodyParser.json())
app.use('/users', usersRoutes)
app.use('/guitars',guitarRoutes)

app.set('view engine', 'hbs');



app.get('/', (req,res) =>{res.render('index', {Title: "Sklep", Body: "Gitary"})})
app.get('/users', (req,res) =>{res.send("użytkownicy")})
app.get('/comments', (req,res)=> {res.send("komentarze")})



app.listen(port)