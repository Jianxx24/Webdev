const express = require('express')


const usersRoutes = require('./routes/users.js');
const bodyParser = require("body-parser")
const port = 8000
const app = express()
app.use(bodyParser.json())
app.use('/users', usersRoutes)
app.set('view engine', 'hbs');



app.get('/', (req,res) =>{res.render('index', {Title: "Sklep", Body: "Gitary"})})
app.get('/users', (req,res) =>{res.send("użytkownicy")})
app.get('/comments', (req,res)=> {res.send("komentarze")})



app.listen(port)