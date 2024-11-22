var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('basicCalcu', { title: 'Basic Calculator', num1: null, num2: null, sum: null, product: null, quotient: null, different: null, average: null});
});

/* Post page */
router.post('/', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const sum = num1 + num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const different  = num1 - num2;
  const average  = num1 + num2 / 2;

  
  //render the same form with the result
  res.render('basicCalcu', { title: "Basic Calculator", num1, num2, sum, product, quotient, different, average});
});

module.exports = router;
