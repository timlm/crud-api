const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const error_handler = require("./middleware/error-handler");
const createError = require("http-errors");

const usersRouter = require('./routers/users');

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());


app.use('/users', usersRouter);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('Server is up');
});


app.use(error_handler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'No resource found'));
});



module.exports = app;



