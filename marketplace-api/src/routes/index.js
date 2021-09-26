const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('it\'s alive');
});

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/catalogs", require("./catalogs"));
router.use("/reviews", require("./reviews"));
router.use("/purchases", require("./purchases"));

module.exports = router;
