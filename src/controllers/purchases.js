const mongoose = require('mongoose');
const Purchase = mongoose.model('Purchase');

function createPurchase(req, res, next) {
    var purchase = new Purchase(req.body);
    purchase.save()
        .then(purchase => {
            res.status(200).send(purchase);
        })
        .catch(next);
}

function getPurchase(req, res, next) {
    if (req.params.id) {
        Purchase.findById(req.params.id)
            .then(purchase => {
                res.send(purchase);
            })
            .catch(next);
    } else {
        Purchase.find()
            .then(purchases => {
                res.send(purchases);
            })
            .catch(next);
    }
}

function updatePurchase(req, res, next) {
    Purchase.findById(req.params.id)
        .then(purchase => {
            if (!purchase) return res.sendStatus(401);
            let newInfo = req.body;
            if (typeof newInfo.buyerId !== 'undefined')
                purchase.buyerId = newInfo.buyerId;
            if (typeof newInfo.sellerId !== 'undefined')
                purchase.sellerId = newInfo.sellerId;
            if (typeof newInfo.productId !== 'undefined')
                purchase.productId = newInfo.productId;
            if (typeof newInfo.quantity !== 'undefined')
                purchase.quantity = newInfo.quantity;
            if (typeof newInfo.subtotal !== 'undefined')
                purchase.subtotal = newInfo.subtotal;
            purchase.save().then(updateUser => {
                res.status(201).json(updateUser.publicData());
            }).catch(next);
        })
        .catch(next);
}

function deletePurchase(req, res, next) {
    Purchase.findOneAndDelete({ _id: req.params.id })
        .then(r => {
            res.status(200).send(`Purchase ${req.params.id} deleted: ${r}`);
        })
        .catch(next);
}

module.exports = {
    createPurchase,
    getPurchase,
    updatePurchase,
    deletePurchase
};