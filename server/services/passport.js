const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const Users = require('../models/Users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new googleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback/'
    },
    (accessToken, refreshToken, profile, cb) => {
        Users.findOne({ email: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                cb(null, existingUser)
            } else {
                new Users({
                    email: profile.id,
                    username: profile.displayName
                }).save()
                .then((user) => {
                    cb(null, user)
                })
            }
        })
    })
);