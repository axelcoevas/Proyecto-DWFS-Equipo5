const Article = require("../models/Article")

// CREATE
function createItem(req, res) {
    const mArticle = new Article(req.body)
    res.status(200).send(mArticle);
}

// READ
function showItem(req, res) {

    const { productId, productName } = req.body

    //DB connection and validation
    if (productId && productName) {

        let mArticle = new Article(
            productId,
            productName,
            "https://https://picsum.photos/200/300?random=1",
            299.99,
            1
        );

        res.status(200).send(mArticle)

    } else {
        res.status(404).send(`Article not found. Try again, please`)
    }
}

// UPDATE
function updateItem(req, res) {

    const itemId = req.params.id

    // Get item by Id using DB to get current item state 
    const item = parseInt(itemId);

    // If item exists start to update

    if (item) {

        let mArticle = new Article(itemId, "T-Rex 3D figure", "https://picsum.photos/200/300?random=1", 299.99, 1)

        const mChanges = req.body;
        mArticle = { ...mArticle, ...mChanges };

        // send article to db to update it and return response
        res.status(200).send(mArticle)

    } else {
        res.status(404).send(`We cannot update article with id "${itemId}". Try again, please`)
    }

}

// DELETE
function deleteItem(req, res) {
    res.status(200).send(`Article with id ${req.params.id} has been deleted successfully!`)
}

module.exports = {
    createItem,
    showItem,
    updateItem,
    deleteItem,
};
