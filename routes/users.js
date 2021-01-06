const express = require('express')

const router = express.Router();

const uzytkownicy = [
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        email: "janko@exmample.com"
    }
]

router.get('/', (req,res)=>{
    res.send(uzytkownicy)
}
);

router.post('/', (req,res)=> {
    console.log("Odbieram dane")
    const uzytkownik = req.body;
    console.log(uzytkownik)
    uzytkownicy.push(uzytkownik);
    res.send(uzytkownicy)
})

module.exports = router;