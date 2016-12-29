var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.pug', { title: 'Express' });
});

router.get('/login-register', function(req, res, next) {
  res.render('login-register.pug');
});

module.exports = router;
