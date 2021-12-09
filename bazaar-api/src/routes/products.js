const router = require('express').Router();

const {
    createProduct,
    getProduct,
    getProductByName,
    getProductDistinctByNumber,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

const auth = require('./auth');

router.get('/', auth.required, getProduct);
router.get('/:id', auth.required, getProduct);
router.get('/name/:name', auth.optional, getProductByName);
router.get('/distinct/:limit', auth.optional, getProductDistinctByNumber);
router.post('/', auth.required, createProduct);
router.put('/:id', auth.required, updateProduct);
router.delete('/:id', auth.required, deleteProduct);

module.exports = router;

