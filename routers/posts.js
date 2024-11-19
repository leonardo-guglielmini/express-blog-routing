const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
    res.send("Lista dei posts");
})

//show
router.get("/:id", (req, res) => {
    res.send(`Post: ${req.params.id}`);
})

//store
router.post("/", (req, res) => {
    res.send("Inserimento nuovo post");
})

//update
router.put("/:id", (req, res) => {
    res.send(`Modifica totale del post: ${req.params.id}`);
})

//modify
router.patch("/:id", (req, res) => {
    res.send(`Modifica parziale del post: ${req.params.id}`);
})

//delete
router.delete("/:id", (req, res) => {
    res.send(`Cancellazione del post ${req.params.id}`);
})

module.exports = router;