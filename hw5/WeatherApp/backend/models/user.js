const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  city: String,
  name: String
});

module.exports = mongoose.model('User', userSchema);
