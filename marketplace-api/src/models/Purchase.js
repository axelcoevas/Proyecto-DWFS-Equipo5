// class Purchase {
//   constructor(purchaseId, userId_Buyer, userId_Seller, product_Id, reviewId, quantity, subtotal, purchaseDate) {
//     this.purchaseId = purchaseId;
//     this.userId_Buyer = userId_Buyer;
//     this.userId_Seller = userId_Seller;
//     this.product_Id = product_Id;
//     this.reviewId = reviewId;
//     this.quantity = quantity;
//     this.subtotal = subtotal;
//     this.purchaseDate = purchaseDate;
//   }
// }

// module.exports = Purchase;

const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    subtotal: Number
}, { collection: 'Purchases', timestamps: true });

PurchaseSchema.methods.publicData = () => {
    return {
        buyerId: this.buyerId,
        sellerId: this.sellerId,
        productId: this.productId,
        reviewId: this.reviewId,
        quantity: this.quantity,
        subtotal: this.subtotal
    };
};

mongoose.model('Purchase', PurchaseSchema);