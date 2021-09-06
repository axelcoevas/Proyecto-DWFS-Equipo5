const router = require("express").Router();

const {
    showItem,
    createItem,
    updateItem,
    deleteItem,
} = require("../controllers/articles")

router.get("/", showItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
