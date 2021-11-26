const router = require('express').Router();

const {
    createReview,
    getReview,
    updateReview,
    deleteReview
} = require('../controllers/reviews');

const auth = require('./auth');

router.get('/', auth.required, getReview);
router.get('/:id', auth.required, getReview);
router.post('/', auth.required, createReview);
router.put('/:id', auth.required, updateReview);
router.delete('/:id', auth.required, deleteReview);

module.exports = router;

