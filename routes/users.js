var express = require('express');
var router = express.Router();

/* dishRouter.use(bodyParser.json()); */


/* users listing. */
router.route('/')
.all(function(req, res, next) {
  res.send('respond with a resource');
})
.get(function(req, res, next) {
  res.send('respond with a resource');
})
.post(function(req, res, next) {
  res.send('respond with a resource');
})
.delete(function(req, res, next) {
  res.send('respond with a resource');
})

module.exports = router;
