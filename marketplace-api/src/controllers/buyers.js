const Buyer = require("../models/Buyer")

// CREATE
function register(req, res) {
    const mBuyer = new Buyer(req.body)
    res.status(200).send(mBuyer)
}

// READ
function login(req, res) {

    const { nickname, password } = req.body

    //DB connection and validation
    if (nickname && password) {

        let mBuyer = new Buyer(
            req.params.id,
            password,
            "john.doe@gmail.com",
            nickname,
            "logged",
            new Date().toLocaleString(),
            "Juan Doe",
            "Avenida Lomas Altas 119 Colonia Arbide, León, Gto",
            "5324-4563-2378-3321",
            "??"
        );

        res.status(200).send(mBuyer)

    } else {
        res.status(404).send(`Buyer not found. Try again, please`)
    }
}

// UPDATE
function updateProfile(req, res) {

    const sellerId = req.params.id

    // Get buyer by Id using DB to get current buyer state 
    const seller = parseInt(sellerId)

    // If buyer exists start to update

    if (seller) {

        let mSeller = new Seller(sellerId,
            "password",
            "juan.doe@gmail.com",
            "nickname",
            true,
            new Date().toLocaleString(),
            "Juan Doe",
            "0987654321")

        const mChanges = req.body;
        mSeller = { ...mSeller, ...mChanges }

        // send buyer to db to update it and return response
        res.status(200).send(mSeller)

    } else {
        res.status(404).send(`We cannot update buyer with id "${sellerId}". Try again, please`)
    }

}

// DELETE
function deleteBuyer(req, res) {
    res.status(200).send(`Buyer with id ${req.params.id} has been deleted successfully!`)
}

module.exports = {
    register,
    login,
    updateProfile,
    deleteBuyer,
};
