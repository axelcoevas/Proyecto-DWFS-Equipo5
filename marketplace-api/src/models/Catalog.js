// class Catalog {
//   constructor(catalogId, userId, productId) {
//     this.catalogId = catalogId;
//     this.userId = userId;
//     this.productId = productId;
//   }
// }

// module.exports = Catalog;

const mongoose = require('mongoose');

const CatalogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }]
}, { collection: 'Catalogs', timestamps: true });

CatalogSchema.methods.publicData = () => {
  return {
    userId: this.userId,
    productId: this.productId
  };
};

mongoose.model('Catalog', CatalogSchema);