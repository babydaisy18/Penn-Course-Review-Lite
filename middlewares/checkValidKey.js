var keysDb = require('../db/key');

// This function checks if a given API key is valid.
// The callback has type function (err, isValid) where:
// 1. err is some database error if one was thrown during lookup, otherwise null/undefined
// 2. isValid is a boolean indicating whether the key is valid
var isAPIKeyValid = function (apiKey, callback) {
  keysDb.containsKey(apiKey, callback);
};

var checkValidKey = function (req, res, next) {

  isAPIKeyValid(req.query.key, function (err, valid) {
    if (err !== null) {
      next(err);
    } else if (valid) {
      next();
    } else {
      res.status(403);
    //pass new Error('Invalid Key') to next fxn
      next(new Error('Invalid Key'));
    }
  });
}; 

module.exports = checkValidKey;
