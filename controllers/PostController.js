const { Router } = require("express");
const Post = require('../models/Post');

const router = new Router();

router.post("/create_post", async function(req, res) {
    if(req.body.title.length > 0 && req.body.text.length > 0 && req.body.title.length < 64 && req.body.text.length < 255) {
        await Post.create(req.body);
        res.redirect(`/board/${req.body.boardId}`);    
    }
    else {
        res.send("Your message is way too short or way too long.")
    }
})

module.exports = router;