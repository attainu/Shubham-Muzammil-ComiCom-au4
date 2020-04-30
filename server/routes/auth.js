import passport from 'passport';
import express from 'express';
import controllers from '../controllers/index';
const router = express.Router();

router.get('/google',passport.authenticate('google', {
  scope: ['profile', 'email'] 
}));

// Successful authentication, redirect profile.
router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'https://comicom2020.herokuapp.com/signin' }),
  (req, res) => {
  res.redirect('https://comicom2020.herokuapp.com/');
});

router.get('/facebook',
  passport.authenticate('facebook')
);

router.get("/facebook/callback",passport.authenticate('facebook', { failureRedirect: 'https://comicom2020.herokuapp.com/signin' }),
(req, res) => {
  res.redirect('https://comicom2020.herokuapp.com/');
});

router.post('/register', controllers.registerUser);
router.post('/login', controllers.loginUser);
router.get('/current', controllers.currentUserInfo)
router.get('/logout',controllers.currentUserLogout)

//admin routes
router.post('/admin/login', controllers.loginAdmin);
router.get('/admin/logout',controllers.currentUserLogout);

export default router;