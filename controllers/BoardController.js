const { Router } = require("express");
const Post = require('../models/Post');

const router = new Router();

router.get('/:id', async function(req, res) {
    const posts = await Post.findAll({where: {boardId: req.params.id }, raw: true});
    res.render("board", {posts: posts, id: req.params.id});
})

module.exports = router;