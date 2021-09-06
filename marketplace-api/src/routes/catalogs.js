const router = require("express").Router();

const {
    showCatalog,
} = require("../controllers/catalogs");

router.get("/", showCatalog);

module.exports = router;

