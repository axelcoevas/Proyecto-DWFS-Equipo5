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
        return res.json(buyer.publicData());
      }
    });
}

// UPDATE
function updateProfile(req, res) {

  const sellerId = req.params.id;

  // Get buyer by Id using DB to get current buyer state
  const seller = parseInt(sellerId);

  // If buyer exists start to update

  if (seller) {

    let mSeller = new Seller(sellerId,
      "password",
      "juan.doe@gmail.com",
      "nickname",
      true,
      new Date().toLocaleString(),
      "Juan Doe",
      "0987654321");

    const mChanges = req.body;
    mSeller = { ...mSeller, ...mChanges };

    // send buyer to db to update it and return response
    res.status(200).send(mSeller);

  } else {
    res.status(404).send(`We cannot update buyer with id "${sellerId}". Try again, please`);
  }

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
