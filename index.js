const express = require('express')

var session = require('express-session');
const flash = require('connect-flash');
const port = 8000
const bodyParser = require("body-parser")
const app = express()
const Guitar = require('./models/guitar')
const Amp = require('./models/amplifier')
const Cab = require('./models/cabinet')
const User = require('./models/user')
const Basket = require('./models/basket')
const passport = require('passport');
require("./config/passport")(passport)
const Order = require('./models/basket')
const { body, validationResult } = require('express-validator');

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
   }));
   app.use(passport.initialize());
app.use(passport.session());
   app.use(flash());
   app.use((req,res,next)=> {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error  = req.flash('error');
   next();
   })


const hbs = require('express-handlebars');
var path = require('path');
const usersRoutes = require('./routes/users.js');
const guitarRoutes = require('./routes/guitars')
const ampRoutes = require('./routes/amps')
const cabRoutes = require('./routes/cabs')
const userRoutes = require('./routes/users')

const mongoose = require('./db/db')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/users', usersRoutes)
app.use('/guitars', guitarRoutes)
app.use('/amps', ampRoutes)
app.use('/cabs', cabRoutes)
app.use('/users', userRoutes)
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
app.use(session({
    resave: true,
    saveUninitialized: true, secret: 'ssssshhhhh', cookie: { maxAge: 1000 * 60 * 60, secure: true, }
}))



app.get('/', (req, res) => {
    console.log(req.session)
    res.render('index', { Title: "Sklep", Body: "Gitary", session:req.session})
})


app.listen(port)