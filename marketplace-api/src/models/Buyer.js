const User = require('./User');

class Buyer extends User {
  constructor(userId, password, email, nickname, loginStatus, registerDate, customerName, address, creditCardInfo, shoppingInfo) {
    super(userId, password, email, nickname, loginStatus, registerDate);
    this.customerName = customerName;
    this.address = address;
    this.creditCardInfo = creditCardInfo;
    this.shoppingInfo = shoppingInfo;
  }
}

module.exports = Buyer;
