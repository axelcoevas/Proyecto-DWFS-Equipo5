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

const UsuarioSchema = new mongoose.Schema({
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
    required: [true, "Falta email"],
    match: [/\$+@\$+.\$/],
    index: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, "This field can't be empty"],
    lowercase: true,
    match: [/^[a-z0-9]+$/, "Invalid username"],
    index: true
  },
  type: {
    type: String,
    enum: ['seller', 'buyer']
  },
  hash: String,
  salt: String
}, { collection: 'Users', timestamps: true });

UsuarioSchema.plugin(uniqueValidator, { message: 'Already exists' });

UsuarioSchema.methods.publicData = () => {
  return {
    id: this.id,
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    username: this.username,
    type: this.type
  };
};

UserSchema.methods.createPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(passwrod, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function (password) {
  const newHash = crypto.pbkdf2Sync(passwrod, this.salt, 10000, 512, 'sha512').toString('hex');
  return newHash === this.hash;
};

UserSchema.methods.getJWT = function () {
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

const User = mongoose.model('User', UserSchema);

//  Schema for buyers

const BuyerSchema = User.discriminator('Buyer', new mongoose.Schema({
  address: {
    type: String,
    required: [true, "This field can't be empty"]
  },
  creditCardInfo: String,
  shoppingInfo: String
}));;

//  Schema for sellers

const SellerSchema = User.discriminator('Seller', new mongoose.Schema({
  phoneNumber: String
}));


