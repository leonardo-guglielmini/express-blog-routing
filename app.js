const express = require("express");
const app = express();

const postsRouter = require("./routers/posts.js")

const port = 3000;

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
})