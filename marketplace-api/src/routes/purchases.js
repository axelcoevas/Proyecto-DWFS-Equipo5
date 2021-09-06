const router = require("express").Router();
const { makePurchase, showPurchase } = require("../controllers/purchases");

router.get("/", showPurchase);
router.post("/", makePurchase);

module.exports = router;