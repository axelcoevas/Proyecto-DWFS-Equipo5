const router = require("express").Router();


const {
    showDetailPurchase,
    calulateSubtotal
} = require("../controllers/purchasesDetail");

router.get("/", showDetailPurchase);
router.get("/:id", calulateSubtotal);

module.exports = router;