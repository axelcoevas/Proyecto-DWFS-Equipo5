const router = require('express').Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products');

router.get('/', getProduct);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

