const Seller = require("../models/Seller")

// CREATE
function register(req, res) {
    const mSeller = new Seller(req.body)
    res.status(200).send(mSeller)
}

// READ
function login(req, res) {

    const { nickname, password } = req.body

    //DB connection and validation
    if (nickname && password) {

        let mSeller = new Seller(
            req.params.id,
            password,
            "john.doe@gmail.com",
            nickname,
            true,
            new Date().toLocaleString(),
            "John Doe",
            "1234567890"
        );

        res.status(200).send(mSeller)

    } else {
        res.status(404).send(`Seller not found. Try again, please`)
    }
}

// UPDATE
function updateProfile(req, res) {

    const sellerId = req.params.id

    // Get seller by Id using DB to get current seller state 
    const seller = parseInt(sellerId);

    // If seller exists start to update

    if (seller) {

        let mSeller = new Seller(sellerId,
            "password",
            "john.doe@gmail.com",
            "nickname",
            "logged",
            new Date().toLocaleString(),
            "John Doe",
            "1234567890")

        const mChanges = req.body;
        mSeller = { ...mSeller, ...mChanges }

        // send seller to db to update it and return response
        res.status(200).send(mSeller)

    } else {
        res.status(404).send(`We cannot update seller with id "${sellerId}". Try again, please`)
    }

}

// DELETE
function deleteSeller(req, res) {
    res.status(200).send(`Seller with id ${req.params.id} has been deleted successfully!`)
}

module.exports = {
    register,
    login,
    updateProfile,
    deleteSeller,
};
