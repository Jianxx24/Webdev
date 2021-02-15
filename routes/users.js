const express = require('express')
var session = require('express-session');
var cookieParser = require('cookie-parser');
var User = require('../models/user');
var flash = require('connect-flash');
const bcrypt = require('bcrypt');
var passport=require('passport')
const bodyParser = require("body-parser")
const { body, validationResult } = require('express-validator');
const {ensureAuthenticated} = require("../config/auth.js")
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(cookieParser());
router.use(session({ secret: '123' }));
router.use(flash())

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


    res.render('login', {
        title: 'Zaloguj'
    });

});

router.post('/login', function (req, res, next) {
    passport.authenticate('local',{
        successRedirect : '/',
        failureRedirect : '/users/login',
        failureFlash : true,
        })(req,res,next);
});

router.get('/logout', function (req, res) {

    req.logout();

    req.flash('success', 'Wylogowano!');
    res.redirect('/');

});

module.exports = router;