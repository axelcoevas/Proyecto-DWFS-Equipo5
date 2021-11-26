// class Product {
//   constructor(productId, productName, productImage, price, quantity) {
//     this.productId = productId;
//     this.productName = productName;
//     this.productImage = productImage;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }

// module.exports = Product;

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    quantity: Number
}, { collection: 'Products', timestamps: true });

ProductSchema.methods.publicData = () => {
    return {
        name: this.name,
        image: this.image,
        price: this.price,
        quantity: this.quantity
    };
};

mongoose.model('Product', ProductSchema);