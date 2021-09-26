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

const catalogRoles = ['buyer', 'seller'];


async function seedDB() {
    const numberOfSeeds = 50;
    console.log("Seeding Collections!");
    await seedUsers(numberOfSeeds);
    console.log("Seeding Process Done!");
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
        collection.insertMany(catalogsList);
        console.log("Seeding Users Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }

    numberOfSeeds;
}

async function seedCatalogs(numberOfSeeds) {
    try {
        await client.connect();
        console.log("CATALOGS: Seeding Catalogs");
        const collection = client.db("Bazaar").collection("Catalogs");
        collection.drop();

        let catalogsList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            let catalog = {
                userId: 1,
                productId: 1
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
                name: '',
                image: '',
                price: '',
                quantity: ''
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

}

async function seedReviews(numberOfSeeds) {

}

module.exports = seedDB;