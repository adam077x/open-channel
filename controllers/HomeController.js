const { Router } = require("express");

const router = new Router();

router.get('/', function(req, res) {
    res.render("index");
})

module.exports = router;