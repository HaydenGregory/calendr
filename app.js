var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiPatientsRouter = require('./routes/api/patients')
const apiDoctorsRouter = require('./routes/api/doctors')
const apiAppointmentsRouter = require('./routes/api/appointments')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/patients', apiPatientsRouter)
app.use('/api/v1/doctors', apiDoctorsRouter)
app.use('/api/v1/appointments', apiAppointmentsRouter)


module.exports = app;
