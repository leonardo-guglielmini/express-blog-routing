const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
    res.send("");
})

//show
router.get("/:id", (req, res) => {
    res.send("");
})

//store
router.post("/", (req, res) => {
    res.send("");
})

//update
router.put("/:id", (req, res) => {
    res.send("");
})

//modify
router.patch("/:id", (req, res) => {
    res.send("");
})

//delete
router.delete("/:id", (req, res) => {
    res.send("");
})

module.exports = router;