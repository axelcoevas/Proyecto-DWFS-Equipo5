const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('../views/index.hbs');
});

// USERS ROUTE
router.use("/users", require("./users"));
router.use("/sellers", require("./sellers"));
router.use("/buyers", require("./buyers"));
router.use("/articles", require("./articles"));
router.use("/catalogs", require("./catalogs"));
router.use("/reviews", require("./reviews"));
router.use("/purchases", require("./purchases"));

module.exports = router;
