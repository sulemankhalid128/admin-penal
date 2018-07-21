var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/adnimpenal';
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('err', function(){
  console.log('error while connecting');
});
db.once('open', function(){
  console.log('connection is established');
});

var forntPage = require('./routes/front-page');
var signinUser = require('./routes/signin-user');
var dashboad = require('./routes/dashboad');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(forntPage);     //[Get]   /
app.use(signinUser);   //[Post]  /sigin/user
app.use(dashboad);    //[Get]    /dashboad
app.use(login);     //[Post]    /login



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
