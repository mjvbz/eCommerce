var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var FileUpload = require('express-fileupload');

// + express-handlebars@5.3.4
var hbs = require('express-handlebars');

// MongoDb database 
var db = require('./config/connection');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
const fileUpload = require('express-fileupload');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', hbs ({extname: 'hbs',defaultLayout: 'layout', layoutsDir:__dirname + '/views/layout/', partialsDir:__dirname + '/views/partials/'}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload())

db.connect((err) => {
  if(err) console.log('Database Connection Failed'+err);
  else console.log('Database Connected to port 27017')
});

app.use('/', indexRouter);
app.use('/admin-pannel', adminRouter);
app.use(`/.netlify/functions/api`, router);

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
