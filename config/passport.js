const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require("../models/user");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField : 'username'},(username,password,done)=> {
                //match user
                User.findOne({username : username})
                .then((user)=>{console.log("Logowanie");
                 if(!user) {
                     return done(null,false,{message : 'Ten adres jest niezarejestrowany'});
                 }
                 //match pass
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                        console.log("Hasło poprawne!") 
                        return done(null,user);
                         
                     } else {
                         return done(null,false,{message : 'Niepoprawne hasło'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 