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


function getPurchaseByUser(req, res, next) {
    let key = ""
    switch(req.params.role){
        case "seller": key = "sellerId"
        break
        
        case "buyer": key = "buyerId"
        break

        default: return res.status(401).send("Bad request. Try again, plesae")
    }

    if (req.params.id) {
        const ObjectId = mongoose.Types.ObjectId; 
        Purchase.find({[`${key}`]: new ObjectId(req.params.id)})
            .then(purchase => {
                res.send(purchase);
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
            purchase.save().then(_ => {
                res.status(200).json({message: `Purchase updated successfully with id: ${req.params.id}`});
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

function purchaseRating(req,res,next){
    if(req.body.sellerId){
        const ObjectId = mongoose.Types.ObjectId; 
        Purchase.aggregate([
            [
                {
                '$match': {
                    'sellerId': new ObjectId(req.body.sellerId)
                }
                }, {
                '$lookup': {
                    'from': 'Reviews', 
                    'localField': '_id', 
                    'foreignField': 'purchaseId', 
                    'as': 'result'
                }
                }, {
                '$project': {
                    'quantity': '$result.qualify', 
                    '_id': 0
                }
                }, {
                '$unwind': {
                    'path': '$quantity'
                }
                }
            ]
        ]) .then(ratingList => {
            const sum = ratingList.reduce((a, b) => a + b.quantity, 0)
            const avg = (sum / ratingList.length) || 0
            res.status(200).json({"rating": Number(avg).toFixed(1)})
        })
        .catch(next);
    }else{
        return res.status(404).json({ error: 'This seller does not have rating' });
    }
}

module.exports = {
    createPurchase,
    getPurchase,
    getPurchaseByUser,
    updatePurchase,
    deletePurchase,
    purchaseRating
};