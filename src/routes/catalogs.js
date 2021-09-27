const router = require('express').Router();

const {
    createCatalog,
    getCatalog,
    updateCatalog,
    deleteCatalog
} = require('../controllers/catalogs');

const auth = require('./auth');

router.get('/', auth.required, getCatalog);
router.get('/:id', auth.required, getCatalog);
router.post('/', auth.required, createCatalog);
router.put('/:id', auth.required, updateCatalog);
router.delete('/:id', auth.required, deleteCatalog);

module.exports = router;

