const mongoose = require('mongoose');
const Review = mongoose.model('Review');

function createReview(req, res, next) {
  var review = new Review(req.body);
  review.save()
    .then(review => {
      res.status(200).send(review);
    })
    .catch(next);
}

function getReview(req, res, next) {
  if (req.params.id) {
    Review.findById(req.params.id)
      .then(review => {
        res.send(review);
      })
      .catch(next);
  } else {
    Review.find()
      .then(reviews => {
        res.send(reviews);
      })
      .catch(next);
  }
}

function updateReview(req, res, next) {
  Review.findById(req.params.id)
    .then(review => {
      if (!review) return res.sendStatus(401);
      let newInfo = req.body;
      if (typeof newInfo.userId !== 'undefined')
        review.userId = newInfo.userId;
      if (typeof newInfo.purchaseId !== 'undefined')
        review.purchaseId = newInfo.purchaseId;
      if (typeof newInfo.qualify !== 'undefined')
        review.qualify = newInfo.qualify;
      if (typeof newInfo.summary !== 'undefined')
        review.summary = newInfo.summary;
      review.save().then(updateUser => {
        res.status(201).json(updateUser.publicData());
      }).catch(next);
    })
    .catch(next);
}

function deleteReview(req, res, next) {
  Review.findOneAndDelete({ _id: req.params.id })
    .then(r => {
      res.status(200).send(`Review ${req.params.id} deleted: ${r}`);
    })
    .catch(next);
}

module.exports = {
  createReview,
  getReview,
  updateReview,
  deleteReview
};