const Article = require("../models/Article")
const Catalog = require("../models/Catalog")

function showCatalog(req, res) {
    const { userId } = req.body
    const catalog = parseInt(userId)

    if (catalog) {
        const article1 = new Article(1, "Computer", "https://http2.mlstatic.com/D_NQ_NP_812191-MLM47207762812_082021-O.webp", 13600.00, 1)
        const article2 = new Article(2, "iPhone5", "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/b6461f99-63d1-46e6-bf23-13e785eab995.7ed873fb41077547921c319c5b67e5cb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff", 1250.00, 1)
        const catalogList = [article1, article2]
        res.status(200).send(catalogList)
    } else {
        res.status(404).send(`User with id ${userId} doesn't have a catalog yet!`)
    }

}

module.exports = {
    showCatalog
};