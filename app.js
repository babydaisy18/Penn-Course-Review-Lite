var express = require('express');
var app = express();
var uuid = require('node-uuid');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
// Serve static pages
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
});

// Generate a random cookie secret for this app
var generateCookieSecret = function () {
  return 'iamasecret' + uuid.v4();
};
// Mounting routers
app.use('/', require('./routes/keys'));
app.use('/api', require('./middlewares/checkValidKey'), require('./routes/api'));
app.use(cookieSession({ secret: generateCookieSecret() }));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require('./routes/login'));
app.use('/reviews', require('./middlewares/isAuthenticated'), require('./routes/reviews'));

// Mount error-handling middleware.

app.use(require('./middlewares/handleError'));
app.use(require('./middlewares/pageNotFound'));

module.exports = app;
