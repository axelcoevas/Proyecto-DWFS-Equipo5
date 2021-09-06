const { verifyLogin } = require("../controllers/users");

const router = require("express").Router();

router.get("/", verifyLogin);

module.exports = router;