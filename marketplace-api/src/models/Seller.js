const User = require('./User');

class Seller extends User {
  constructor(userId, password, email, nickname, loginStatus, registerDate, sellerName, phoneNumber) {
    super(userId, password, email, nickname, loginStatus, registerDate);
    this.sellerName = sellerName;
    this.phoneNumber = phoneNumber;
  }

  register() {

  }

  login() {

  }

  updateProfile() {

  }

  salesHistory() {

  }

  createItem() {

  }

  updateItem() {

  }
}

module.exports = Seller;

