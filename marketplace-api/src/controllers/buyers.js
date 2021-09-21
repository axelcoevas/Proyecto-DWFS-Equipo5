const mongoose = require('mongoose');
const Buyer = mongoose.model('Buyer');
const passport = require('passport');

// CREATE
function createBuyer(req, res, next) {
  const body = req.body;
  const password = body.password;

  delete body.password;
  const buyer = new Buyer(body);

  buyer.createPassword(password);
  buyer.save()
    .then(buyer => {
      return res.status(200).json(buyer.toAuthJSON());
    })
    .catch(next);
}

// READ
function getBuyers(req, res, next) {
  Buyer.findById(req.usuario.id)
    .then(buyer => {
      if (!buyer) {
        return res.sendStatus(401);
      }
      return res.json(buyer.publicData());
    })
    .catch(next);
}

// UPDATE
function updateBuyer(req, res) {
  Buyer.findById(req.usuario.id)
    .then(buyer => {
      if (!buyer) { return res.sendStatus(401); }
      //aquí me quedé
    });
}

// DELETE
function deleteBuyer(req, res) {
  res.status(200).send(`Buyer with id ${req.params.id} has been deleted successfully!`);
}

module.exports = {
  register,
  login,
  updateProfile,
  deleteBuyer,
};
