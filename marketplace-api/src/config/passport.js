const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  User.findOne({ email: email })
    .then(function (user) {
   
      if (!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'wrong' } });
      }
     
      return done(null, user);
    })
    .catch(done);
}));