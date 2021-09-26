const router = require('express').Router();

const {
  createPurchase,
  getPurchase,
  getPurchaseByUser,
  updatePurchase,
  deletePurchase
} = require('../controllers/purchases');

router.get('/', getPurchase);
router.get('/:id', getPurchase);
router.get('/:role/:id', getPurchaseByUser);
router.post('/', createPurchase);
router.put('/:id', updatePurchase);
router.delete('/:id', deletePurchase);

module.exports = router;

