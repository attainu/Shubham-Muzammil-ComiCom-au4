import passport from 'passport';
import {Strategy as googleStrategy} from 'passport-google-oauth20';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import {googleClientId, googleClientSecret, facebooAppId, facebooClientSecret} from '../config/keys';
import Users from '../models/Users';

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user)
    })
})

// for google
passport.use(
    new googleStrategy({
        clientID: googleClientId,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback/',
        proxy:true,
    },
    (accessToken, refreshToken, profile, cb) => {
        Users.findOne({ email: profile._json.email })
        .then((existingUser) => {
            if (existingUser) {
                cb(null, existingUser)
            } else {
                new Users({
                    email: profile._json.email,
                    userName: profile.displayName
                }).save()
                .then((user) => {
                    cb(null, user)
                })
            }
        })
    })
);

// for facebaook
passport.use(
    new FacebookStrategy({
    clientID: facebooAppId,
    clientSecret: facebooClientSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email'],
    proxy:true,
    },
    (accessToken, refreshToken, profile,done)=>{
        Users.findOne({email:profile.id})
            .then((existingUser)=>{
                if(existingUser){
                    done(null,existingUser)
                }else{
                    new Users({
                        email:profile.id,
                        userName:profile.displayName,            
                    }).save()
                    .then((user)=>{
                        done(null,user)
                    })
                }
            })
        }
    )
);