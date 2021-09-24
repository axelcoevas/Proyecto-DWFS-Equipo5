const mongoose = require('mongoose');
const Catalog = mongoose.model('Catalog');

function createCatalog(req, res, next) {
  var catalog = new Catalog(req.body);
  catalog.save()
    .then(catalog => {
      res.status(200).send(catalog);
    })
    .catch(next);
}

function getCatalog(req, res, next) {
  if (req.params.id) {
    Catalog.findById(req.params.id)
      .then(catalog => {
        res.send(catalog);
      })
      .catch(next);
  } else {
    Catalog.find()
      .then(catalogs => {
        res.send(catalogs);
      })
      .catch(next);
  }
}

function updateCatalog(req, res, next) {
  Catalog.findById(req.params.id)
    .then(catalog => {
      if (!catalog) return res.sendStatus(401);
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.userId !== 'undefined')
        catalog.userId = nuevaInfo.userId;
      if (typeof nuevaInfo.productId !== 'undefined')
        catalog.productId = nuevaInfo.productId;
      catalog.save().then(updateUser => {
        res.status(201).json(updateUser.publicData());
      }).catch(next);
    })
    .catch(next);
}

function deleteCatalog(req, res, next) {
  Catalog.findOneAndDelete({ _id: req.params.id })
    .then(r => {
      res.status(200).send(`Catalog ${req.params.id} deleted: ${r}`);
    })
    .catch(next);
}

module.exports = {
  createCatalog,
  getCatalog,
  updateCatalog,
  deleteCatalog
};