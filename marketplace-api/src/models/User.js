class User {
  constructor(userId, password, email, nickname, loginStatus, registerDate) {
    this.userId = userId;
    this.password = password;
    this.email = email;
    this.nickname = nickname;
    this.loginStatus = loginStatus;
    this.registerDate = registerDate;
  }

  verifyLogin() {

  }
}

module.exports = User;