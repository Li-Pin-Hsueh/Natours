const Review = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// MIDDLEWARE
exports.setTourUserId = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id; // Get req.user from protect middleware
  next();
};

// CREATE
exports.createReview = factory.createOne(Review);

// READ
exports.getAllReviews = factory.getAll(Review);

exports.getReview = factory.getOne(Review);

// UPDATE
exports.updateReview = factory.updateOne(Review);

// DELETE
exports.deleteReview = factory.deleteOne(Review);
