const express = require('express');
const User = require('../models/user');
var router = express.Router();

router.put('/update', (req, res) => {
  req.user.city = req.body.city;
  User.updateOne({ _id: req.user._id }, req.user)
  .then(result => {
    res.status(200).json({ message: "Updated", user: result});
  });
});


module.exports = router;
