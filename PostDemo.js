const express = require("express");
const app = express();

app.use(express.urlencoded({
    "extended": true
}));

app.post("/search", (req, res) => {
    res.send(`You searched for ${req.body.q}`);
});

app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="post" action="/search">
        <input type="text" name="q">
        <input type="submit" value="search">
        </form>
        </body>
        </html>`)
});

app.listen(3099, "localhost", 150, () => {
    console.log("Server started at 3097");
});