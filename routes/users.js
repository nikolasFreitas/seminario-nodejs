var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/manolo', function(req,res,next) {
  res.send('Aqui é o manolo');
})

module.exports = router;
