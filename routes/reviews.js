var express = require('express');
var router = express.Router();
var reviewsDb = require('../db/reviews');

//on GET, render addreview page
router.get('/new', function (req, res, next) {
  res.render('addreview');
});

router.post('/new', function (req, res, next) {
  reviewsDb.addReview(req.body, function (err) {
    req.body.rating = Number(req.body.rating);
    if (err !== null) {
      next(err);
    } else {
      res.send('Success!');
    }
  });
});


module.exports = router;