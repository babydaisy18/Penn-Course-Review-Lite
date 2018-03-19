
*/
var isAuthenticated = function (req, res, next) {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/loginAdmin');
  }
};

// Export the middleware function for use in app.js
module.exports = isAuthenticated;
