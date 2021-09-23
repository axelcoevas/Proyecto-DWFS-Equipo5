const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

function signup(req, res, next) {
  const body = req.body;
  const password = body.password;

  delete body.password;
  const user = new User(body);

  user.createPassword(password);
  user.save()
    .then(user => {
      return res.status(200).json(user.toAuthJSON);
    })
    .catch(next);
}

function login(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(422).json({ error: 'You must fill all fields' });
  }

  passport.authenticate('local', {
    session: false,
  }, function (err, user, info) {
    if (err) { return next(err); }
    if (user) {
      user.token = user.generateJWT();
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

function getUsers(req, res, next) {
  User.findById(req.user.id)
    .then(user => {
      if (!user) {
        return res.sendStatus(401);
      }
      return res.json(user.publicData());
    })
    .catch(next);
}

function updateUser(req, res, next) {
  User.findById(req.user.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newData = req.body;
    if (typeof newData.username !== 'undefined')
      user.username = newData.username;
    if (typeof newData.firstname !== 'undefined')
      user.firstname = newData.firstname;
    if (typeof newData.lastname !== 'undefined')
      user.lastname = newData.lastname;
    if (user.type === 'seller') {
      if (typeof newData.lastname !== 'undefined')
        user.lastname = newData.lastname;
      if (typeof newData.creditCardInfo !== 'undefined')
        user.creditCardInfo = newData.creditCardInfo;
      if (typeof newData.shoppingInfo !== 'undefined')
        user.shoppingInfo = newData.shoppingInfo;
    }
    if (user.type === 'buyer') {
      if (typeof newData.phoneNumber !== 'undefined')
        user.phoneNumber = newData.phoneNumber;
    }
    if (typeof newData.password !== 'undefined')
      user.crearPassword(newData.password);
    user.save().then(updatedUser => {
      res.status(201).json(updatedUser.publicData());
    }).catch(next);
  }).catch(next);
}

function deleteUser(req, res, next) {
  User.findOneAndDelete({ _id: req.user.id })
    .then(res => {
      res.status(200).send("User deleted");
    })
    .catch(next);
}

module.exports = {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUser
};