const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
  res.redirect('http://localhost:4200');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    message: 'logged out'
  })
});

router.get('/user', (req, res) => {
  res.status(200).json({
    message: "Users fetched",
    user: req.user || null
  });
});

module.exports = router;
