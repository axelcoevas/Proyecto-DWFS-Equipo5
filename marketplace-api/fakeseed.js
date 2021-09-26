// require the necessary libraries
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Product = mongoose.model('Product');
const Review = mongoose.model('Review');
const Purchase = mongoose.model('Purchase');
const Catalog = mongoose.model('Catalog');
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
});

const userRoles = ['buyer', 'seller'];
let buyersId, sellersId, productsId, purchasesId;


async function seedDB() {
    const numberOfSeeds = 50;
    console.log("Seeding Collections!");
    await seedUsers(numberOfSeeds);
    await seedProducts(numberOfSeeds);

    buyersId = await User.find({ type: 'buyer' }, { _id: 1 });
    sellersId = await User.find({ type: 'seller' }, { _id: 1 });
    productsId = await Product.find({}, { _id: 1 });
    await seedPurchases(numberOfSeeds);
    await seedCatalogs(numberOfSeeds);

    purchasesId = await Purchase.find({}, { _id: 1 });
    await seedReviews(numberOfSeeds);

    console.log("Sending Process Done!");
}

async function seedUsers(numberOfSeeds) {
    try {
        await client.connect();
        console.log("USERS: Seeding Users");
        const collection = client.db("Bazaar").collection("Users");
        collection.drop();

        let usersList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            const firstname = faker.name.firstName();
            const lastname = faker.name.lastName();
            const password = 'holamundo'; //faker.internet.password()

            let user = {
                username: faker.internet.userName(firstname, lastname),
                firstname,
                lastname,
                email: faker.internet.email(firstname, lastname),
                type: faker.helpers.randomize(userRoles),
                address: faker.address.streetAddress(),
                creditCardInfo: faker.finance.mask(16, false, false),
                phoneNumber: faker.phone.phoneNumber('55########')
            };

            const userDB = new User(user);
            userDB.createPassword(password);
            usersList.push(userDB);
        }
        collection.insertMany(usersList);
        console.log("Seeding Users Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedCatalogs(numberOfSeeds) {
    try {
        await client.connect();
        console.log("CATALOGS: Seeding Catalogs");
        const collection = client.db("Bazaar").collection("Catalogs");
        collection.drop();

        let catalogsList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            let products = [];
            const rnd = Math.random() * 9 + 1;
            for (let j = 0; j < rnd; j++) {
                products.push(faker.helpers.randomize(productsId));
            }
            let catalog = {
                userId: faker.helpers.randomize(buyersId),
                productId: products
            };

            const catalogDB = new Catalog(catalog);
            catalogsList.push(catalogDB);
        }
        collection.insertMany(catalogsList);
        console.log("Seeding Catalogs Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedProducts(numberOfSeeds) {
    try {
        await client.connect();
        console.log("PRODUCTS: Seeding Products");
        const collection = client.db("Bazaar").collection("Products");
        collection.drop();

        let productsList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            let product = {
                name: faker.commerce.productName(),
                image: faker.image.imageUrl(),
                price: faker.commerce.price(),
                quantity: faker.datatype.number()
            };

            const productDB = new Product(product);
            productsList.push(productDB);
        }
        collection.insertMany(productsList);
        console.log("Seeding Products Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedPurchases(numberOfSeeds) {
    try {
        await client.connect();
        console.log("PURCHASES: Seeding Purchases");
        const collection = client.db("Bazaar").collection("Purchases");
        collection.drop();

        let purchasesList = [];

        for (let i = 0; i < numberOfSeeds; i++) {

            let purchase = {
                buyerId: faker.helpers.randomize(buyersId),
                sellerId: faker.helpers.randomize(sellersId),
                productId: faker.helpers.randomize(productsId),
                quantityId: faker.datatype.number(),
                subtotal: faker.datatype.float()
            };

            const purchaseDB = new Purchase(purchase);
            purchasesList.push(purchaseDB);
        }
        collection.insertMany(purchasesList);
        console.log("Seeding Purchases Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedReviews(numberOfSeeds) {
    try {
        await client.connect();
        console.log("REVIEWS: Seeding Reviews");
        const collection = client.db("Bazaar").collection("Reviews");
        collection.drop();

        let reviewsList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            let review = {
                buyerId: faker.helpers.randomize(buyersId),
                purchaseId: faker.helpers.randomize(purchasesId),
                productId: faker.helpers.randomize(productsId),
                qualify: faker.datatype.number(10),
                sumary: faker.commerce.productDescription()
            };

            const reviewDB = new Review(review);
            reviewsList.push(reviewDB);
        }
        collection.insertMany(reviewsList);
        console.log("Seeding Reviews Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

module.exports = seedDB;