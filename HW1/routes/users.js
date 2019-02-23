var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.json({'String': req.params.id});
});
router.post('/',function(req,res){
  let id=req.body.id
  res.send("Hello "+id);

});
module.exports = router;
