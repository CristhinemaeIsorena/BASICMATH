var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var basicMathRouter = require('./routes/basicMath'); // Name of project demo link 1 iso 
var aboutRouter = require('./routes/about'); // Nav link 2 about us
var demoRouter = require('./routes/demo'); // Nav link 3 description
var basicCalcuRouter = require('./routes/basicCalcu'); // Nav link 4 Basic Calculator
var userinfoRouter = require('./routes/userinfo'); // Nav link 5 User Information

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/basicMath', basicMathRouter); // Name of project link 1 iso
app.use('/about', aboutRouter); // Nav link 2 about us
app.use('/demo', demoRouter); // Nav link 3 description 
app.use('/basicCalcu', basicCalcuRouter); // Nav link 4 Basic Calculator
app.use('/userinfo', userinfoRouter); // Nav link 5 User Information

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
