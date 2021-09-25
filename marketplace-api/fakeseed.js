// require the necessary libraries
const mongoose = require('mongoose');
const User = mongoose.model('User');
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
    });

const userRoles = ['buyer','seller']


async function seedDB() {
    const numberOfSeeds = 50
    console.log("Seeding Collections!")
    await seedUsers(numberOfSeeds)
    console.log("Seeding Process Done!")
}

async function seedUsers(numberOfSeeds){
  
    try {
        await client.connect();
        console.log("USERS: Seeding Users")
        const collection = client.db("Bazaar").collection("Users")
        collection.drop();    

        let usersList = [];

        for (let i = 0; i < numberOfSeeds; i++) {
            const firstname = faker.name.firstName()
            const lastname = faker.name.lastName()
            const password = faker.internet.password()
              
            let user = {
                username: faker.internet.userName(firstname,lastname),
                firstname,
                lastname,
                email: faker.internet.email(firstname, lastname),
                type: faker.helpers.randomize(userRoles),
                address: faker.address.streetAddress(),
                creditCardInfo: faker.finance.mask(16, false, false),
                phoneNumber: faker.phone.phoneNumber('55########')
            }

	        const userDB = new User(user)
	        userDB.createPassword(password);
            usersList.push(userDB);
        }
        collection.insertMany(usersList);
        console.log("Seeding Users Complete!");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }

    numberOfSeeds
}

module.exports = seedDB 