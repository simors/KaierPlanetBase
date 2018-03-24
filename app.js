'use strict';
require('babel-register')
require("babel-polyfill")
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var LYAPI = require('lvyii_api');
var LYAUTH = require('lvyii_auth');
var userFuncs = require('./user')

const appApiCfg = {
  appName: 'KaierPlanet',
  uploader: {
    provider: 'qiniu',
    AK: process.env.UPLOADER_AK,
    SK: process.env.UPLOADER_SK,
    bucket: 'kaierplanet',
    region: 'z2',
    bindDomain: 'http://p5vltllic.bkt.clouddn.com'
  },
  sms: {
    provider: "qcloudsms",
    appId: process.env.SMS_APP_ID,
    appKey: process.env.SMS_APP_KEY,
    sign: "小吉网络"
  }
}

LYAPI.init(appApiCfg);

const appAuthCfg = {
  appName: 'KaierPlanet',
  secret: process.env.AUTH_SECRET,
  serverURLs: {
    api: process.env.API_SERVER_URL
  },
  media: 'redis',
  mediaCfg: {
    redis_url: process.env.REDIS_URL,
    redis_port: process.env.REDIS_PORT,
    redis_db: process.env.REDIS_DB,
    redis_auth: process.env.REDIS_AUTH,
  },
  verifyPhoneSmsTempId: '96732',
  
  fetchUserById: userFuncs.fetchUserById,
  loginWithMobilePhone: userFuncs.loginWithMobilePhone,
  loginWithUsername: userFuncs.loginWithUsername,
  signUpWithUsername: userFuncs.signUpWithUsername,
  signUpWithMobilePhone: userFuncs.signUpWithMobilePhone,
  signUpOrlogInWithMobilePhone: userFuncs.signUpOrlogInWithMobilePhone
};

LYAUTH.init(appAuthCfg);

// 初始化mongodb的连接
require('./util/mongdUtil')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(LYAPI.express())
app.use(LYAUTH.express())

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
