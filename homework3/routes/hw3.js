var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

let apiKey = 'S6aBCEcYAKeydNCGi';
router.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.airvisual.com/v2/city?city=${city}&state=California&country=USA&key=${apiKey}`

    request(url, function (err, response, body) {
        if(err){
            res.render('index', {state: null, error: 'Error, please try again'});
            console.log("error")
        } else {
            console.log(body)
            let state = JSON.parse(body)
            if(state.data === undefined){
                res.render('index', {state: null, error: 'Error, try again or refresh the page'});
            } else {
                let stateText = `${state.data.location.coordinates}`;
                res.render('index', {state: stateText, error: null});
            }
        }
    });
})
module.exports = router;
