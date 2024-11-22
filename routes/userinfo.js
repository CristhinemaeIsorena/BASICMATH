var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('userinfo', { title: 'User Information', fullname: null, course: null, university: null});
});

/* POST user information. */
router.post('/', function(req, res) {
  const { fullname, course, university } = req.body;

  // Render a new view or send a response with the received data
  res.render('userinfo', { title: 'Submitted Information', fullname, course, university});
});

module.exports = router;
