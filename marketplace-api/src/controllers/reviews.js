const Review = require("../models/Review")

function makeReview(req, res) {
    const mReview = new Review(req.body)
    res.send(mReview)
}

function showReview(req, res) {
    const { reviewId } = req.body
    const review = parseInt(reviewId)
    if (review) {
        const mReview = new Review(reviewId, 1, 2, 6, 3.5, "Me encantó, pero estuvo caro")
        res.status(200).send(mReview)
    } else {
        res.status(404).send(`Review not found with id ${reviewId}`)
    }
}


function calculateQualifying(req, res) {
    const productId = req.params.id
    const maxRate = 5
    const review = parseInt(productId)
    if (review) {
        // (rating_count * 5) / max_rating  ---Pending---
        const mAverage = (productId * maxRate) / maxRate
        res.status(200).send({ average: parseFloat(mAverage) })
    } else {
        res.status(404).send({ average: 0.0 })
    }
}



module.exports = {
    makeReview,
    showReview,
    calculateQualifying
};