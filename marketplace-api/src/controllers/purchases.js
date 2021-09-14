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


// READ
function calulateSubtotal(req, res) {

    const productId = req.params.id
    const { quantity } = req.body

    // Get item by Id using DB to get current item state 

    const product = parseInt(productId)

    if (product) {
        const subtotal = productId * quantity
        res.status(200).send({ subtotal: subtotal })
    } else {
        res.status(404).send(`Couldn't calculate subtotal. Try again, please`)
    }
}


module.exports = {
    makePurchase,
    calulateSubtotal,
    showPurchase
};
