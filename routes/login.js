var express = require('express');
var router = express.Router();

// Provided - do not modify
var credentalsAreValid = function (username, password) {
  return username === 'admin' && password === 'password';
};

// Implement the routes.

//have router render the login page on a GET request
router.get('/loginAdmin', function (req, res, next) {
  res.render('login');
});

//on POST, if the user submitted the correct username and password, set isAuthenticated to be true and send response 'Logged in as admin'
//if authentication failed, redirect user to login page
//use credentalsAreValid and cookie-session and body-parser implicitly
router.post('/loginAdmin', function (req, res, next) {
  if (credentalsAreValid(req.body.username, req.body.password)) {
    req.session.isAuthenticated = true;
    res.send('Logged in as admin');
    next();
  } else {
    //redirect to login page
    res.redirect('/loginAdmin');
    //or is it /login?
  }
});

module.exports = router;
