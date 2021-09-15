// class Review {
//   constructor(reviewId, userId, purchaseId, productId, qualify, sumary) {
//     this.reviewId = reviewId;
//     this.userId = userId;
//     this.purchaseId = purchaseId;
//     this.productId = productId;
//     this.qualify = qualify;
//     this.sumary = sumary;
//   }
// }

// module.exports = Review;

const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  qualify: Number,
  sumary: String
}, { collection: 'Reviews', timestamps: true });

ReviewSchema.methods.publicData = () => {
  return {
    userId: this.userId,
    purchaseId: this.purchaseId,
    productId: this.productId,
    qualify: this.qualify,
    sumary: this.sumary
  };
};

mongoose.model('Review', ReviewSchema);