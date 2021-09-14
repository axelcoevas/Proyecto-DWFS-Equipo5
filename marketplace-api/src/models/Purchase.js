class Purchase {
  constructor(purchaseId, userId_Buyer, userId_Seller, product_Id, reviewId, quantity, subtotal, purchaseDate) {
    this.purchaseId = purchaseId;
    this.userId_Buyer = userId_Buyer;
    this.userId_Seller = userId_Seller;
    this.product_Id = product_Id;
    this.reviewId = reviewId;
    this.quantity = quantity;
    this.subtotal = subtotal;
    this.purchaseDate = purchaseDate;
  }

  makePurchase() {
   
  }

  calulateSubtotal(){

  }
  
  showPurchase() {

  }

}

module.exports = Purchase;