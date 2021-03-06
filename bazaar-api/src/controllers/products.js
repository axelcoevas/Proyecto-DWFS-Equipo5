const mongoose = require('mongoose');
const Product = mongoose.model('Product');

function createProduct(req, res, next) {
  var product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).send(product);
    })
    .catch(next);
}

function getProduct(req, res, next) {
  if (req.params.id) {
    Product.findById(req.params.id)
      .then(product => {
        res.send(product);
      })
      .catch(next);
  } else {
    Product.find()
      .then(products => {
        res.send( products.filter((item) => item.status === 'available'));
      })
      .catch(next);
  }
}

function getProductByName(req, res, next) {
  if (req.params.name) {
    console.log(req.params.name)
    Product.find({
      name: {'$regex': req.params.name},
      status: 'available',
    })
      .then(products => {
        res.send(products.filter((item) => item.status === 'available'));
      })
      .catch(next);
  } else {
    Product.find()
      .then(products => {
        res.send(products.filter((item) => item.status === 'available'));
      })
      .catch(next);
  }
}

function getProductDistinctByNumber(req, res, next) {
  if (req.params.limit) {
    Product.find({
      status: 'available',
    })
      .distinct({ name })
      .limit(req.params.limit)
      .then(products => {
        res.send(products);
      })
      .catch(next);
  } else {
    Product.find({
      status: 'available',
    })
      .distinct({ name })
      .then(products => {
        res.send(products);
      })
      .catch(next);
  }
}

function updateProduct(req, res, next) {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) return res.sendStatus(401);
      let newInfo = req.body;
      if (typeof newInfo.name !== 'undefined')
        product.name = newInfo.name;
      if (typeof newInfo.image !== 'undefined')
        product.image = newInfo.image;
      if (typeof newInfo.price !== 'undefined')
        product.price = newInfo.price;
      if (typeof newInfo.quantity !== 'undefined')
        product.quantity = newInfo.quantity;
      product.save().then(updateUser => {
        res.status(201).json(updateUser.publicData());
      }).catch(next);
    })
    .catch(next);
}

function deleteProduct(req, res, next) {
  Product.findOneAndDelete({ _id: req.params.id })
    .then(r => {
      res.status(200).send(`Product ${req.params.id} deleted: ${r}`);
    })
    .catch(next);
}

module.exports = {
  createProduct,
  getProduct,
  getProductByName,
  getProductDistinctByNumber,
  updateProduct,
  deleteProduct
};