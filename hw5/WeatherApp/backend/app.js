const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const userRouter = require('./routes/userRoute');
const weatherRouter = require('./routes/weatherRoute');
const authRouter = require('./routes/authRoute');
const bodyParser = require("body-parser");
const keys = require('./config/keys');
require('./config/passport-setup');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ keys.cookieKey]
  })
);

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb//localhost:27017/db')
.then(() => {
  console.log('database connected!');
})
.catch(() => {
  console.log("connection failed!");
});

app.use('/api/user', userRouter);
app.use('/api/weather', weatherRouter);
app.use('/auth', authRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
