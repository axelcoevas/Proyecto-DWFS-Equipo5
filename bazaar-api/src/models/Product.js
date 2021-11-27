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
    status: {
        type: String,
        enum: ['available', 'processing', 'aparted', 'sold'],
    },
    description: { 
        type: String,
        maxLength : 50,
    }
}, { collection: 'Products', timestamps: true });

ProductSchema.methods.publicData = () => {
    return {
        name: this.name,
        image: this.image,
        price: this.price,
        status: this.status,
        description: this.description,
    };
};

mongoose.model('Product', ProductSchema);