const express = require("express")
const router = express.Router();

router.post('/product', (req, res) => {
    try {
        res.send([global.product_list, global.product_category])
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;