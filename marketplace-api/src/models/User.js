// class User {
//   constructor(userId, hash, email, nickname, loginStatus, registerDate) {
//     this.userId = userId;
//     this.email = email;
//     this.nickname = nickname;
//     this.hash = hash;
//   }
// }

// module.exports = User;

// Schema for Users in general

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "This field can't be empty"],
    lowercase: true,
    match: [/^[a-z0-9]+$/, "Invalid username"],
    index: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email missing'],
    match: [/\$+@\$+.\$/],
    index: true
  },
  type: {
    type: String,
    enum: ['buyer', 'seller']
  },
  address: String,
  creditCardInfo: String,
  shoppingInfo: String,
  phoneNumber: String,
  hash: String,
  salt: String
}, { collection: 'Users', timestamps: true });

UserSchema.plugin(uniqueValidator, { message: 'Already exists' });

UserSchema.methods.publicData = function () {
  return {
    id: this.id,
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    username: this.username,
    type: this.type,
    address: this.address,
    creditCardInfo: this.creditCardInfo,
    shoppingInfo: this.shoppingInfo,
    phoneNumber: this.phoneNumber
  };
};

UserSchema.methods.createPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function (password) {
  const newHash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return newHash === this.hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, secret);
};

UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generaJWT()
  };
};

mongoose.model('User', UserSchema);


