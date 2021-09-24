const router = require('express').Router();

const {
  createReview,
  getReview,
  updateReview,
  deleteReview
} = require('../controllers/reviews');

router.get('/', getReview);
router.get('/:id', getReview);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;

