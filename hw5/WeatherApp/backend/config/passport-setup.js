const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'http://localhost:3000/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if(existingUser){
          done(null, existingUser);
        }else{
          new User({ googleId: profile.id, city: 'Mumbai', name: profile.displayName })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
