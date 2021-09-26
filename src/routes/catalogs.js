const router = require('express').Router();

const {
  createCatalog,
  getCatalog,
  updateCatalog,
  deleteCatalog
} = require('../controllers/catalogs');

router.get('/', getCatalog);
router.get('/:id', getCatalog);
router.post('/', createCatalog);
router.put('/:id', updateCatalog);
router.delete('/:id', deleteCatalog);

module.exports = router;

