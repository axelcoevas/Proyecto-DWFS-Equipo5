const { showReview, makeReview, calculateQualifying } = require("../controllers/reviews");

const router = require("express").Router();

router.post("/", makeReview);
router.get("/", showReview);
router.get("/:id", calculateQualifying);

module.exports = router;