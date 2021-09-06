const Purchase = require("../models/Purchase")

// CREATE
function makePurchase(req, res) {
    const mPurchase = new Purchase(req.body)
    res.status(200).send(mPurchase)
}

// READ
function showPurchase(req, res) {

    const { purchaseId } = req.body

    const purchase = parseInt(purchaseId)
    //DB connection and validation
    if (purchase) {

        let mPurchase = new Purchase(purchaseId, 1, 2, 1, 5)

        res.status(200).send(mPurchase)

    } else {
        res.status(404).send(`Purchase not found. Try again, please`)
    }
}

module.exports = {
    makePurchase,
    showPurchase
};
