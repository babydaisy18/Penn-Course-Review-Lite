var express = require('express');
var router = express.Router();

var credentalsAreValid = function (username, password) {
  return username === 'admin' && password === 'password';
};


//have router render the login page on a GET request
router.get('/loginAdmin', function (req, res, next) {
  res.render('login');
});

router.post('/loginAdmin', function (req, res, next) {
  if (credentalsAreValid(req.body.username, req.body.password)) {
    req.session.isAuthenticated = true;
    res.send('Logged in as admin');
    next();
  } else {
    //redirect to login page
    res.redirect('/loginAdmin');
  }
});

module.exports = router;
