const router = require("express").Router();
const { makePurchase, calulateSubtotal, showPurchase } = require("../controllers/purchases");

router.get("/", showPurchase);
router.get("/:id", calulateSubtotal)
router.post("/", makePurchase);

module.exports = router;