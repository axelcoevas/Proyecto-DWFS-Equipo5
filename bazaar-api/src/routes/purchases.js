const router = require('express').Router();

const {
    createPurchase,
    getPurchase,
    getPurchaseByUser,
    updatePurchase,
    deletePurchase,
    purchaseRating
} = require('../controllers/purchases');

const auth = require('./auth');

router.get('/', auth.required, getPurchase);
router.get('/sellerRating', auth.optional, purchaseRating);
router.get('/:id', auth.required, getPurchase);
router.get('/:role/:id', auth.required, getPurchaseByUser);
router.post('/', auth.required, createPurchase);
router.put('/:id', auth.required, updatePurchase);
router.delete('/:id', auth.required, deletePurchase);

module.exports = router;

