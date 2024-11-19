const express = require("express");
const router = express.Router();

const postList = require("../data/posts.js");

//index
router.get("/", (req, res) => {
    //res.send(`Lista dei post`);
    res.send(postList);
})

//show
router.get("/:slug", (req, res) => {
    //res.send(`Post: ${req.params.id}`);
    res.send(postList.find((post) => post.slug === req.params.slug));
})

//store
router.post("/", (req, res) => {
    res.send("Inserimento nuovo post");
})

//update
router.put("/:slug", (req, res) => {
    res.send(`Modifica totale del post: ${req.params.slug}`);
})

//modify
router.patch("/:slug", (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.slug}`);
})

//delete
router.delete("/:slug", (req, res) => {
    res.send(`Cancellazione del post ${req.params.slug}`);
})

module.exports = router;