const passport = require('passport');
const router = require('express').Router();

router.get('/', (req, res)=>{
	res.send(req.user)
});

router.get('/auth/google',passport.authenticate('google', {
	scope: ['profile', 'email'] 
}));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
});

module.exports = router;