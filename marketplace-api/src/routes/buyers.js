const router = require("express").Router();

const {
    register,
    login,
    updateProfile,
    deleteBuyer,
} = require("../controllers/buyers");

router.post("/", register);
router.get("/", login);
router.put("/:id", updateProfile);
router.delete("/:id", deleteBuyer);

module.exports = router;
