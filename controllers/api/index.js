const express = require('express');
const router = express.Router();

const cartRoutes = require("./cartRoutes");
router.use("/cart", cartRoutes)

router.get("/showsessions", (req,res) => {
    res.json(req.session)
})
module.exports = router;