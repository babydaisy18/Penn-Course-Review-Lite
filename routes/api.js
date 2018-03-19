var express = require('express');
var router = express.Router();
var reviewsDb = require('../db/reviews');

router.get('/all', function (req, res, next) {
  reviewsDb.getAllReviews(function (error, reviews) {
    if (error !== null) {
      next(error);
    } else {
      res.send(reviews);
    }
  });
});

router.get('/search/:className', function (req, res, next) {
  reviewsDb.getReviewsByClassName(req.params.className, function (error, reviews) {
    if (error !== null) {
      next(error);
    } else {
      res.send(reviews);
    }
  });
});

//if there's an error, call next with it to pass it off to the error-handling middleware


module.exports = router;
