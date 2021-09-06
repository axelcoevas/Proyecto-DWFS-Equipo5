const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('../views/vendedor/index.hbs');
});

module.exports = router;