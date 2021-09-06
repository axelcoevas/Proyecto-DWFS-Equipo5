const PurchaseDetail = require("../models/PurchaseDetail")
const { showItem } = require("./articles")

// READ
function showDetailPurchase(req, res) {

    const { purchaseDetailId, productId, } = req.body

    // Get item by Id using DB to get current item state 
    const purchaseDetail = parseInt(purchaseDetailId)

    if (purchaseDetail) {

        let mDetailPurchase = new PurchaseDetail(purchaseDetailId, productId, 1, 10, new Date().toLocaleString())

        res.status(200).send(mDetailPurchase)

    } else {
        res.status(404).send(`Detail purchase not found. Try again, please`)
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
    showDetailPurchase,
    calulateSubtotal
};
