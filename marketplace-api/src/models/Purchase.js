class Purchase {
  constructor(purchaseId, userId_Buyer, userId_Seller, purchaseDetail, reviewId) {
    this.purchaseId = purchaseId;
    this.userId_Buyer = userId_Buyer;
    this.userId_Seller = userId_Seller;
    this.purchaseDetail = purchaseDetail;
    this.reviewId = reviewId;
  }

  makePurchase() {

  }

  showPurchase() {

  }
}

module.exports = Purchase;