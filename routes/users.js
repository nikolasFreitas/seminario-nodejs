const express = require('express');
const router = express.Router();
const jsonToSend = require('../JSON/user.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(jsonToSend);
});

module.exports = router;
