const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');

var router = express.Router();

var hitWeather = (cityName) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.weatherAPI}&units=metric`;
};

router.get('/info', (req, res) => {
  var city = req.user.city;
  var temp;
  axios.get(hitWeather(city))
    .then(response => {
      temp = response.data.main.temp;
    })
    .catch(error => {
      console.log(error);
    })
    .then(function(){
      res.status(200).json({
        "cityName": city,
        "temperature": temp
      });
    });
});

module.exports = router;
