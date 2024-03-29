var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const methodOverride = require ("method-override")

const session = require("express-session")
const auth = require("./middlewares/auth")
//apis
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require("./routes/api/products")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var cors = require("cors")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride("_method"));

app.use(session({
  secret : "baruk",
  resave : false ,
 // saveUninitialized :true,
 // cookie: { maxAge: 8*60*60*1000 }, // 8hs
}))
app.use(auth)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/users', apiUsersRouter);
app.use("/api/products",apiProductsRouter)



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
