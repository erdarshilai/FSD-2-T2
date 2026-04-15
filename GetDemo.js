const express = require("express");
const app = express();

app.get("/search", (req, res) => {
    res.send(`You searched for ${req.query.q}`);
});

app.get("/", (req, res) => {
    res.send(`<html>
        <body>
        <form method="get" action="/search">
        <input type="text" name="q">
        <input type="submit" value="search">
        </form>
        </body>
        </html>`)
});

app.listen(3097, "localhost", 150, () => {
    console.log("Server started at 3097");
});