import passport from 'passport';
import express from 'express';
import controllers from '../controllers/index';
const router = express.Router();

router.get('/google',passport.authenticate('google', {
  scope: ['profile', 'email'] 
}));

// Successful authentication, redirect profile.
router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/signin' }),
  (req, res) => {
  res.redirect('http://localhost:3000/');
});

router.get('/facebook',
  passport.authenticate('facebook')
);

router.get("/facebook/callback",passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/signin' }),
(req, res) => {
  res.redirect('http://localhost:3000/');
});

router.post('/register', controllers.registerUser);
router.post('/login', controllers.loginUser);
router.get('/current', controllers.currentUserInfo)
router.get('/logout',controllers.currentUserLogout)

export default router;