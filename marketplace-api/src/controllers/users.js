function verifyLogin(req, res) {
    const { nickname, password } = req.body

    if (nickname && password) {
        res.status(200).send({ isLogged: true })
    } else {
        res.status(404).send({ isLogged: false })
    }
}


module.exports = {
    verifyLogin
};