const express = require('express')
var session = require('express-session');
var cookieParser = require('cookie-parser');
var User = require('../models/user');
var flash = require('req-flash');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser")
const { body, validationResult } = require('express-validator');
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(cookieParser());
router.use(session({ secret: '123' }));
router.use(flash())
const uzytkownicy = [
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        email: "janko@exmample.com"
    }
]

router.get('/', (req, res) => {
    res.send(uzytkownicy)
}
);

router.post('/', (req, res) => {
    console.log("Odbieram dane")
    const uzytkownik = req.body;
    console.log(uzytkownik)
    uzytkownicy.push(uzytkownik);
    res.send(uzytkownicy)
})

router.get('/register', function (req, res) {

    res.render('register', {
        title: 'Rejestracja'
    });

});

router.post('/register', function (req, res) {
    console.log(req.body)
    var imie = req.body.imie;
    var nazwisko = req.body.nazwisko;
    var adres = req.body.adres;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    var phone = req.body.phone;
    console.log(imie)
    body('imie', 'Imię jest wymagane!').notEmpty();
    body('nazwisko', 'Nazwisko jest wymagane!').notEmpty();
    body('adres', 'Adres jest wymagany!').notEmpty();
    body('phone', 'Numer telefonu jest wymagany!').notEmpty();
    body('email', 'Email jest wymagany!').isEmail();
    body('username', 'Nazwa użytkownika jest wymagana!').notEmpty();
    body('password', 'Hasło jest wymagane!').notEmpty();
    body('password2', 'Hasła nie pasują!').equals(password);
    

    var errors = validationResult(req)

    if (errors.errors.isEmpty) {
        console.log(errors)
        res.render('register', {
            errors: errors,
            user: null,
            title: 'Rejestracja'
        });
    } else {
        User.findOne({ username: username }, function (err, user) {
            if (err)
                console.log(err);

            if (user) {
                req.flash('danger', 'Użytkownik o podanej nazwie już istnieje!');
                res.redirect('/users/register');
            } else {
                bcrypt.hash(req.body.password, 10, function (err, PasswordHash) { 
                    if (err) { 
                        res.json({ error: "błąd funkcji haszującej" 
                    }) 
                }
                var user = new User({
                    imie: imie,
                    nazwisko: nazwisko,
                    adres: adres,
                    phone: phone,
                    email: email,
                    username: username,
                    password: PasswordHash,
                    admin: 0
                });
                user.save(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        req.flash('success', 'Zarejestrowano pomyślnie!');
                        res.redirect('/users/login')
                    }
                });
            })

            }
        });
    }

});

router.get('/login', function (req, res) {

    if (res.locals.user) res.redirect('/');

    res.render('login', {
        title: 'Zaloguj'
    });

});

router.post('/login', function (req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({ username: username }).then(user => {
        if (user){
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {console.log("błąd"); res.json({ error: err }) } if (result) {
                    console.log("coś")
                    let token = jwt.sign({ username: user.username }, 'szyfr', { expiresIn: '1H' })
                    console.log("zalogowano")
                    res.render('index')
                }
                else {console.log("błędne hasło!"); req.flash('warning', "Błędne hasło!"); res.render('login', { title: "Zaloguj" }) }
            })
        }
})
});

router.get('/logout', function (req, res) {

    req.logout();

    req.flash('success', 'Wylogowano!');
    res.redirect('/users/login');

});

module.exports = router;