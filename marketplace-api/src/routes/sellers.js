const router = require("express").Router();

const {
    register,
    login,
    updateProfile,
    deleteSeller,
} = require("../controllers/sellers");

router.post("/", register);
router.get("/", login);
router.put("/:id", updateProfile);
router.delete("/:id", deleteSeller);

module.exports = router;
